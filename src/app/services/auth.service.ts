import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private afMessaging: AngularFireMessaging) {
    this.requestPushNotificationsPermission();
  }

  get token(): Observable<string> {
    const token = localStorage.getItem('access_token');

    return token ? of(token) : this.getToken();
  }

  getToken(): Observable<string> {
    const params = {
      grant_type: 'client_credentials'
    };

    const config = {
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic NGNkNjRmZjNkOTgxNDc4Nzg1M2RjODQ0MWUwMjQ2ZWI6NzNiNTQ3ZjFmYmUwNGUzZWJiMGM4MjcwOTk1YTEwZWI='
      }
    };

    return this.http.post<any>(
      'https://accounts.spotify.com/api/token',
      undefined,
      config
    ).pipe(
      tap(response => {
        const {access_token} = response;
        localStorage.setItem('access_token', access_token);
      }),
      map(response => response.access_token)
    );
  }

  requestPushNotificationsPermission(): void {
    this.afMessaging.requestToken
      .subscribe(
        (token) => {
          console.log('Permission granted! Save to the server!', token);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}

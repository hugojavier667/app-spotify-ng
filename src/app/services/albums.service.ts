import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {
  }

  getNewReleases(): Observable<any> {
    return this.http.get<any>(`${environment.spotify_api_host}/browse/new-releases`);
  }

  getAlbum(albumId): Observable<any> {
    return this.http.get<any>(`${environment.spotify_api_host}/albums/${albumId}`);
  }
}

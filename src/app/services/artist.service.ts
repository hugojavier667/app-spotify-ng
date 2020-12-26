import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) {
  }

  getArtist(artistId: string): Observable<any> {
    return this.http.get<any>(`${environment.spotify_api_host}/artists/${artistId}`);
  }

  getArtistTopTracks(artistId: string): Observable<any> {
    return this.http.get<any>(`${environment.spotify_api_host}/artists/${artistId}/top-tracks?country=US`);
  }

  getArtistAlbums(artistId: string): Observable<any> {
    return this.http.get<any>(`${environment.spotify_api_host}/artists/${artistId}/albums`);
  }
}

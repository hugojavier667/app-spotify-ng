import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

type SearchType = 'artist' | 'album';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(searchText: string, type: SearchType, market: string = 'US'): Observable<any> {
    return this.http.get<any>(`${environment.spotify_api_host}/search?q=${searchText}&type=${type}&market=${market}`);
  }

  searchArtist(searchText: string, market: string = 'US'): Observable<any> {
    return this.search(searchText, 'artist', market);
  }
}

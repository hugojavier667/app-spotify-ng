import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ArtistService } from '../services/artist.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistDetailsResolverService {

  constructor(
    private artistService: ArtistService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const artistId = route.paramMap.get('artistId');

    return this.artistService.getArtist(artistId).pipe(
      take(1),
      mergeMap(artist => {
        if (artist) {
          return of(artist);
        } else {
          this.router.navigate(['/albums']);
          return EMPTY;
        }
      })
    );
  }
}

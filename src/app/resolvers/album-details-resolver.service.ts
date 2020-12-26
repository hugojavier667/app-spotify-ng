import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { AlbumsService } from '../services/albums.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailsResolverService implements Resolve<any> {
  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const albumId = route.paramMap.get('albumId');

    return this.albumsService.getAlbum(albumId).pipe(
      take(1),
      mergeMap(album => {
        if (album) {
          return of(album);
        } else {
          this.router.navigate(['/albums']);
          return EMPTY;
        }
      })
    );
  }
}

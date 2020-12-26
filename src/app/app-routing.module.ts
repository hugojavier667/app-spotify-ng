import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './components/albums/albums-list/albums-list.component';
import { AlbumDetailsComponent } from './components/albums/album-details/album-details.component';
import { AlbumDetailsResolverService } from './resolvers/album-details-resolver.service';
import { SearchComponent } from './components/search/search.component';
import { ArtistDetailsComponent, ArtistsListComponent } from './components/artists';
import { ArtistDetailsResolverService } from './resolvers/artist-details-resolver.service';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsListComponent
  },
  {
    path: 'albums/:albumId',
    component: AlbumDetailsComponent,
    resolve: {
      album: AlbumDetailsResolverService
    }
  },
  {
    path: 'artists',
    component: ArtistsListComponent
  },
  {
    path: 'artists/:artistId',
    component: ArtistDetailsComponent,
    resolve: {
      artist: ArtistDetailsResolverService
    }
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {path: '', redirectTo: 'albums', pathMatch: 'full'},
  {path: '**', redirectTo: 'albums'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

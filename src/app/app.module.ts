import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MsToTimePipe } from './pipes/ms-to-time.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlbumCardComponent, AlbumDetailsComponent, AlbumsListComponent } from './components/albums';
import { ArtistCardComponent, ArtistDetailsComponent, ArtistsListComponent } from './components/artists';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthExpiredInterceptor } from './interceptors/auth-expired.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent,
    AlbumCardComponent,
    AlbumDetailsComponent,
    MsToTimePipe,
    NavbarComponent,
    ArtistsListComponent,
    ArtistCardComponent,
    ArtistDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../../services/artist.service';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  artist: any;
  artistAlbums = [];
  artistTopTracks = [];

  faUserFriends = faUserFriends;

  constructor(
    private activatedRoute: ActivatedRoute,
    private artistService: ArtistService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe((data: { artist: any }) => {
        this.artist = data.artist;

        this.loadArtistAlbums();
        this.loadArtistTopTracks();
      });
  }

  private loadArtistAlbums(): void {
    this.artistService.getArtistAlbums(this.artist.id).subscribe(albums => {
      this.artistAlbums = albums.items;
    });
  }

  private loadArtistTopTracks(): void {
    this.artistService.getArtistTopTracks(this.artist.id).subscribe(topTracks => {
      this.artistTopTracks = topTracks.tracks;
    });
  }
}

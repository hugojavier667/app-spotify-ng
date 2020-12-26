import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../services/albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  albums: any[] = [];

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.albumsService.getNewReleases().subscribe(response => {
      this.albums = response.albums.items;
    });
  }

}

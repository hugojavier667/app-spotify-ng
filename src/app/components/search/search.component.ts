import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTerm: string;

  searchResults = [];

  constructor(private searchService: SearchService) {
  }

  search(searchTerm: any): void {
    this.searchService.searchArtist(searchTerm, 'US').subscribe(results => {
      this.searchResults = results.artists.items;
    });
  }
}

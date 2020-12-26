import { TestBed } from '@angular/core/testing';

import { ArtistDetailsResolverService } from './artist-details-resolver.service';

describe('ArtistDetailsResolverService', () => {
  let service: ArtistDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

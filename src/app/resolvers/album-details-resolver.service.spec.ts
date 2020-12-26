import { TestBed } from '@angular/core/testing';

import { AlbumDetailsResolverService } from './album-details-resolver.service';

describe('AlbumDetailsResolverService', () => {
  let service: AlbumDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

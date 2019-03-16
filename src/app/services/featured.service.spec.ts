import { TestBed } from '@angular/core/testing';

import { FeaturedService } from './featured.service';

describe('FeaturedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeaturedService = TestBed.get(FeaturedService);
    expect(service).toBeTruthy();
  });
});

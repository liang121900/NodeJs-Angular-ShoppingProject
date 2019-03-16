import { TestBed } from '@angular/core/testing';

import { OfferaddService } from './offeradd.service';

describe('OfferaddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferaddService = TestBed.get(OfferaddService);
    expect(service).toBeTruthy();
  });
});

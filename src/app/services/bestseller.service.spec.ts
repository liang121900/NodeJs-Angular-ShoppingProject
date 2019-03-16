import { TestBed } from '@angular/core/testing';

import { BestsellerService } from './bestseller.service';

describe('BestsellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestsellerService = TestBed.get(BestsellerService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TopVendorsService } from './top-vendors.service';

describe('TopVendorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopVendorsService = TestBed.get(TopVendorsService);
    expect(service).toBeTruthy();
  });
});

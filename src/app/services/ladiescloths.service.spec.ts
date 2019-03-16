import { TestBed } from '@angular/core/testing';

import { LadiesclothsService } from './ladiescloths.service';

describe('LadiesclothsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LadiesclothsService = TestBed.get(LadiesclothsService);
    expect(service).toBeTruthy();
  });
});

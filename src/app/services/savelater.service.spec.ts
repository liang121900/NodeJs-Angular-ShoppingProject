import { TestBed } from '@angular/core/testing';

import { SavelaterService } from './savelater.service';

describe('SavelaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavelaterService = TestBed.get(SavelaterService);
    expect(service).toBeTruthy();
  });
});

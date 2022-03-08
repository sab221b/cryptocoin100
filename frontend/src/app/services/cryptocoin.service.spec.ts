import { TestBed } from '@angular/core/testing';

import { CryptocoinService } from './cryptocoin.service';

describe('CryptocoinService', () => {
  let service: CryptocoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptocoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

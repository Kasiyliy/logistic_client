import { TestBed } from '@angular/core/testing';

import { CheckCompanyBinService } from './check-company-bin.service';

describe('CheckCompanyBinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckCompanyBinService = TestBed.get(CheckCompanyBinService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FilterconfigMockService } from './filterconfig-mock.service';

describe('FilterconfigMockService', () => {
  let service: FilterconfigMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterconfigMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HeroesMockService } from './heroes-mock.service';

describe('HeroesMockService', () => {
  let service: HeroesMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

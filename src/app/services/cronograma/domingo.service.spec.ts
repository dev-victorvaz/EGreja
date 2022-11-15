import { TestBed } from '@angular/core/testing';

import { DomingoService } from './domingo.service';

describe('DomingoService', () => {
  let service: DomingoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomingoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

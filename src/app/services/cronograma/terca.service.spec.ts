import { TestBed } from '@angular/core/testing';

import { TercaService } from './terca.service';

describe('TercaService', () => {
  let service: TercaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TercaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

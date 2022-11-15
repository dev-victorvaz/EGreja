import { TestBed } from '@angular/core/testing';

import { SegundaService } from './segunda.service';

describe('SegundaService', () => {
  let service: SegundaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegundaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

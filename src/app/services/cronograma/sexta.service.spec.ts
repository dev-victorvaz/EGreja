import { TestBed } from '@angular/core/testing';

import { SextaService } from './sexta.service';

describe('SextaService', () => {
  let service: SextaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SextaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

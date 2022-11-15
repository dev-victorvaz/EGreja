import { TestBed } from '@angular/core/testing';

import { SabadoService } from './sabado.service';

describe('SabadoService', () => {
  let service: SabadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

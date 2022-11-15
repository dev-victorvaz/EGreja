import { TestBed } from '@angular/core/testing';

import { QuartaService } from './quarta.service';

describe('QuartaService', () => {
  let service: QuartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

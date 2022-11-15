import { TestBed } from '@angular/core/testing';

import { QuintaService } from './quinta.service';

describe('QuintaService', () => {
  let service: QuintaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuintaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

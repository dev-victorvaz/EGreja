import { TestBed } from '@angular/core/testing';

import { UserDadosService } from './user-dados.service';

describe('UserDadosService', () => {
  let service: UserDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

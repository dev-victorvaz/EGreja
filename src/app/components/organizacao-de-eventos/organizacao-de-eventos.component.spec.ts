import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacaoDeEventosComponent } from './organizacao-de-eventos.component';

describe('OrganizacaoDeEventosComponent', () => {
  let component: OrganizacaoDeEventosComponent;
  let fixture: ComponentFixture<OrganizacaoDeEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizacaoDeEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizacaoDeEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

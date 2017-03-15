import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPrincipalComponent } from './cadastro-principal.component';

describe('CadastroPrincipalComponent', () => {
  let component: CadastroPrincipalComponent;
  let fixture: ComponentFixture<CadastroPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

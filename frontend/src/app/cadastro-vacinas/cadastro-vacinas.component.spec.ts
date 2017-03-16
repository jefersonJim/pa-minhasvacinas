import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVacinasComponent } from './cadastro-vacinas.component';

describe('CadastroVacinasComponent', () => {
  let component: CadastroVacinasComponent;
  let fixture: ComponentFixture<CadastroVacinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVacinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFilialComponent } from './cadastro-filial.component';

describe('CadastroFilialComponent', () => {
  let component: CadastroFilialComponent;
  let fixture: ComponentFixture<CadastroFilialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFilialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFilialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

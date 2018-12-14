import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesAdicionaisDadosIniciaisComponent } from './informacoes-adicionais-dados-iniciais.component';

describe('InformacoesAdicionaisDadosIniciaisComponent', () => {
  let component: InformacoesAdicionaisDadosIniciaisComponent;
  let fixture: ComponentFixture<InformacoesAdicionaisDadosIniciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesAdicionaisDadosIniciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesAdicionaisDadosIniciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

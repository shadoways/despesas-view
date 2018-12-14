import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesAdicionaisFinanceiroComponent } from './informacoes-adicionais-financeiro.component';

describe('InformacoesAdicionaisFinanceiroComponent', () => {
  let component: InformacoesAdicionaisFinanceiroComponent;
  let fixture: ComponentFixture<InformacoesAdicionaisFinanceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesAdicionaisFinanceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesAdicionaisFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

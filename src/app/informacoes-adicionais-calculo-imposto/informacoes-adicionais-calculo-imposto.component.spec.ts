import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesAdicionaisCalculoImpostoComponent } from './informacoes-adicionais-calculo-imposto.component';

describe('InformacoesAdicionaisCalculoImpostoComponent', () => {
  let component: InformacoesAdicionaisCalculoImpostoComponent;
  let fixture: ComponentFixture<InformacoesAdicionaisCalculoImpostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesAdicionaisCalculoImpostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesAdicionaisCalculoImpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

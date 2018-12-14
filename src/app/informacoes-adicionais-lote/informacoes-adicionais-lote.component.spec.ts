import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesAdicionaisLoteComponent } from './informacoes-adicionais-lote.component';

describe('InformacoesAdicionaisLoteComponent', () => {
  let component: InformacoesAdicionaisLoteComponent;
  let fixture: ComponentFixture<InformacoesAdicionaisLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesAdicionaisLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesAdicionaisLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

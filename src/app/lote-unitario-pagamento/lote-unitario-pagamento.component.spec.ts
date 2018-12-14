import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteUnitarioPagamentoComponent } from './lote-unitario-pagamento.component';

describe('LoteUnitarioPagamentoComponent', () => {
  let component: LoteUnitarioPagamentoComponent;
  let fixture: ComponentFixture<LoteUnitarioPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteUnitarioPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteUnitarioPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

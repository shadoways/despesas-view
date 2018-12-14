import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteUnitarioResumoComponent } from './lote-unitario-resumo.component';

describe('LoteUnitarioResumoComponent', () => {
  let component: LoteUnitarioResumoComponent;
  let fixture: ComponentFixture<LoteUnitarioResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteUnitarioResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteUnitarioResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

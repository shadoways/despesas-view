import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteUnitarioBeneficiarioComponent } from './lote-unitario-beneficiario.component';

describe('LoteUnitarioBeneficiarioComponent', () => {
  let component: LoteUnitarioBeneficiarioComponent;
  let fixture: ComponentFixture<LoteUnitarioBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteUnitarioBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteUnitarioBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

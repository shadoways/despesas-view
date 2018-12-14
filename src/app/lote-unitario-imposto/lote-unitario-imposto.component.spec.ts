import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteUnitarioImpostoComponent } from './lote-unitario-imposto.component';

describe('LoteUnitarioImpostoComponent', () => {
  let component: LoteUnitarioImpostoComponent;
  let fixture: ComponentFixture<LoteUnitarioImpostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteUnitarioImpostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteUnitarioImpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

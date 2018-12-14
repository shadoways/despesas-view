import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteUnitarioSubmitComponent } from './lote-unitario-submit.component';

describe('LoteUnitarioSubmitComponent', () => {
  let component: LoteUnitarioSubmitComponent;
  let fixture: ComponentFixture<LoteUnitarioSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteUnitarioSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteUnitarioSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteUnitarioComponent } from './lote-unitario.component';

describe('LoteUnitarioComponent', () => {
  let component: LoteUnitarioComponent;
  let fixture: ComponentFixture<LoteUnitarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteUnitarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteUnitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

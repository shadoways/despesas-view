import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesAdicionaisAprovacoesComponent } from './informacoes-adicionais-aprovacoes.component';

describe('InformacoesAdicionaisAprovacoesComponent', () => {
  let component: InformacoesAdicionaisAprovacoesComponent;
  let fixture: ComponentFixture<InformacoesAdicionaisAprovacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesAdicionaisAprovacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesAdicionaisAprovacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

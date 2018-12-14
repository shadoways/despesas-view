import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoteUnitarioComponent } from './lote-unitario/lote-unitario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoteUnitarioBeneficiarioComponent } from './lote-unitario-beneficiario/lote-unitario-beneficiario.component';
import { LoteUnitarioImpostoComponent } from './lote-unitario-imposto/lote-unitario-imposto.component';
import { LoteUnitarioResumoComponent } from './lote-unitario-resumo/lote-unitario-resumo.component';
import { LoteUnitarioPagamentoComponent } from './lote-unitario-pagamento/lote-unitario-pagamento.component';
import { LoteUnitarioSubmitComponent } from './lote-unitario-submit/lote-unitario-submit.component';
import { InformacoesAdicionaisComponent } from './informacoes-adicionais/informacoes-adicionais.component';
import { InformacoesAdicionaisDadosIniciaisComponent } from './informacoes-adicionais-dados-iniciais/informacoes-adicionais-dados-iniciais.component';
import { InformacoesAdicionaisLoteComponent } from './informacoes-adicionais-lote/informacoes-adicionais-lote.component';
import { InformacoesAdicionaisAprovacoesComponent } from './informacoes-adicionais-aprovacoes/informacoes-adicionais-aprovacoes.component';
import { InformacoesAdicionaisCalculoImpostoComponent } from './informacoes-adicionais-calculo-imposto/informacoes-adicionais-calculo-imposto.component';
import { InformacoesAdicionaisFinanceiroComponent } from './informacoes-adicionais-financeiro/informacoes-adicionais-financeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoteUnitarioComponent,
    HeaderComponent,
    FooterComponent,
    LoteUnitarioBeneficiarioComponent,
    LoteUnitarioImpostoComponent,
    LoteUnitarioResumoComponent,
    LoteUnitarioPagamentoComponent,
    LoteUnitarioSubmitComponent,
    InformacoesAdicionaisComponent,
    InformacoesAdicionaisDadosIniciaisComponent,
    InformacoesAdicionaisLoteComponent,
    InformacoesAdicionaisAprovacoesComponent,
    InformacoesAdicionaisCalculoImpostoComponent,
    InformacoesAdicionaisFinanceiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

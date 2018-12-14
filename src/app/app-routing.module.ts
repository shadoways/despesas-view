import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoteUnitarioComponent } from './lote-unitario/lote-unitario.component';
import { InformacoesAdicionaisComponent } from './informacoes-adicionais/informacoes-adicionais.component';

const routes: Routes = [
  {
    path:'lote-unitario', component: LoteUnitarioComponent
  },
  {
    path:'informacoes-adicionais', component: InformacoesAdicionaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

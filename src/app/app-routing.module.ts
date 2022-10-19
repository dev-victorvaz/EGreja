import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosComponent } from './components/avisos/avisos.component';
import { MembrosComponent } from './components/membros/membros.component';
import { OrganizacaoDeEventosComponent } from './components/organizacao-de-eventos/organizacao-de-eventos.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'avisos', component: AvisosComponent},
  {path: 'avisos/:id', component: AvisosComponent},
  {path: 'membros', component: MembrosComponent, canActivate: [AuthGuard]},
  {path: 'organizacao-de-eventos', component:OrganizacaoDeEventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

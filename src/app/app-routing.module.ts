import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosComponent } from './components/avisos/avisos.component';
import { MembrosComponent } from './components/membros/membros.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'avisos', component: AvisosComponent},
  {path: 'membros', component: MembrosComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

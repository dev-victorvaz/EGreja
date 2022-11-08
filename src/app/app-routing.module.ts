import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosComponent } from './components/avisos/avisos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MembrosComponent } from './components/membros/membros.component';
import { OrganizacaoDeEventosComponent } from './components/organizacao-de-eventos/organizacao-de-eventos.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/avisos', pathMatch: 'full'},
  {path: 'avisos', component: AvisosComponent},
  {path: 'avisos/:id', component: AvisosComponent},
  {path: 'membros', component: MembrosComponent, canActivate: [AuthGuard]},
  {path: 'organizacao-de-eventos', component:OrganizacaoDeEventosComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'sign-in', component: SignInComponent},
  {path: 'register-user', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'verify-email-address', component: VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, NgZone, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nome: string = this.authService.userData.displayName;
  foto: string = this.authService.userData.photoURL;
  email: string = this.authService.userData.email;
  editarNome: boolean = false;
  alterarSenha: boolean = false;
  novaSenha: string = "";
  editarEmail: boolean = false;

  constructor(
    public authService: AuthService,
    public afs: AngularFireAuth,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
    ) { }

  ngOnInit(): void {
  }

  editarNomeFuncao(decisao: boolean) {
    this.editarNome = decisao;
  }

  editarEmailFuncao(decisao: boolean) {
    this.editarEmail = decisao;
  }

  alterarSenhaFuncao(decisao: boolean) {
    this.alterarSenha = decisao;
  }

  atualizarPerfil() {
    this.authService.editProfile(this.nome, this.foto);
    this.authService.editEmail(this.email);
    this.editarNomeFuncao(false);
  }

  atualizarEmail() {
    this.authService.editEmail(this.email);
    this.editarEmailFuncao(false);
  }

  aplicarNovaSenha() {
    if (this.novaSenha.length > 6) {
      this.authService.updatePassword(this.novaSenha);
      this.alterarSenhaFuncao(false);
    }
    else {
      alert('A senha precisa ter pelo menos 7 caracteres.');
    }
  }
}

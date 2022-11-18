import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore ,collection, getDocs } from "firebase/firestore";
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {
  app = initializeApp(environment.firebaseConfig);
  db = getFirestore(this.app);
  isAdmin = false;
  verPerfilVariavel = false;
  listaMembro = new Array<any>();
  usuarioVisualizado = new User();

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.obterMembros();
    this.verificarAdmin();
    this.definirPerfilInicial(this.authService.userData);
  }

  async obterMembros() {
    const querySnapshot = await getDocs(collection(this.db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.listaMembro.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
  }

  async verificarAdmin() {
    if (await this.authService.isManager(this.authService.userData.uid)) {
      this.isAdmin = true;
    }
    else {
      this.isAdmin = false;
    }
  }

  verPerfil(decisao: boolean) {
    this.verPerfilVariavel = decisao;
  }

    visualizarPerfil(usuario: User) {
      this.usuarioVisualizado.uid = usuario.uid
      this.usuarioVisualizado.displayName = usuario.displayName;
      this.usuarioVisualizado.photoURL = usuario.photoURL;
      this.usuarioVisualizado.email = usuario.email;
      this.usuarioVisualizado.emailVerified = usuario.emailVerified;
      this.verPerfil(true);
    }

    definirPerfilInicial(usuario: User) {
      this.usuarioVisualizado.uid = usuario.uid
      this.usuarioVisualizado.displayName = usuario.displayName;
      this.usuarioVisualizado.photoURL = usuario.photoURL;
      this.usuarioVisualizado.email = usuario.email;
      this.usuarioVisualizado.emailVerified = usuario.emailVerified;
    }
}

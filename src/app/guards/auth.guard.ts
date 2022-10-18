import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(
  private afAuth: AngularFireAuth,
){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      const user = await this.afAuth.currentUser;
      const isAuthenticated = user ? true : false;
      if (!isAuthenticated) {
        alert('Você deve entrar para acessar essa página');
      }
      return isAuthenticated;
  

  }


}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class UserDadosService {
  entidade = "users";

  constructor(
    private http: HttpClient
    ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.urlBase}${environment.appClientId}/${this.entidade}.json`);
  }

  get(uid: string): Observable<User> {
    return this.http.get<User>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${uid}.json`);
  }

  post(aviso: User): Observable<string> {
    return this.http.post<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}.json`, aviso);
  }

  put(uid: string, aviso: User): Observable<string> {
    return this.http.put<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${uid}.json`, aviso);
  }

  delete(uid: string): Observable<string> {
    return this.http.delete<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${uid}.json`);
  }
}

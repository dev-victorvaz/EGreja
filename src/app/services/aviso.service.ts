import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aviso } from '../models/aviso.model';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  entidade = "avisos"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Aviso[]> {
    return this.http.get<Aviso[]>(`${environment.urlBase}${environment.appClientId}/${this.entidade}.json`);
  }

  get(id: string): Observable<Aviso> {
    return this.http.get<Aviso>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${id}.json`);
  }

  post(aviso: Aviso): Observable<string> {
    return this.http.post<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}.json`, aviso);
  }

  put(id: string, aviso: Aviso): Observable<string> {
    return this.http.put<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${id}.json`, aviso);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${id}.json`);
  }
}

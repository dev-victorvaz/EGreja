import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cronograma } from 'src/app/models/cronograma.model';

@Injectable({
  providedIn: 'root'
})
export class SabadoService {
  entidade = "cronograma";
  dia = "sabado";

  constructor(
    private http: HttpClient
    ) { }

  getAll(): Observable<Cronograma[]> {
    return this.http.get<Cronograma[]>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${this.dia}.json`);
  }

  get(id: string): Observable<Cronograma> {
    return this.http.get<Cronograma>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${this.dia}/${id}.json`);
  }

  post(Cronograma: Cronograma): Observable<string> {
    return this.http.post<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${this.dia}.json`, Cronograma);
  }

  put(id: string, Cronograma: Cronograma): Observable<string> {
    return this.http.put<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${this.dia}/${id}.json`, Cronograma);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${this.dia}/${id}.json`);
  }
}
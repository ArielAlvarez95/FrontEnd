import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://proyectofinalargprog.herokuapp.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+'traer/perfil')
  }

  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public save(persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', persona);
  }

  public update(id: number, persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

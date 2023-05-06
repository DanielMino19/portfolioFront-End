import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TituloParrafoService {
  id : number = 1;
  apiUrl = environment.URL;

  constructor(private http: HttpClient) { }


getTituloParrafo(): Observable<{ titulo: string, parrafo: string }> {
  return this.http.get<{ titulo: string, parrafo: string }>(`${this.apiUrl}/api/ver/persona/${this.id}`);
}


updateTituloParrafo(tituloParrafo: { titulo: string, parrafo: string }): Observable<{ titulo: string, parrafo: string }> {
  return this.http.put<{ titulo: string, parrafo: string }>(`${this.apiUrl}/api/put/persona/${this.id}`, tituloParrafo);
}



}
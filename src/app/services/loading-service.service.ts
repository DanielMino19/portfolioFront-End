import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, forkJoin, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  apiUrl = environment.URL;
  private loadingSubject = new Subject<boolean>();
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) { }

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }

  // Método que realiza las solicitudes HTTP y espera a que todas se completen
  doRequests(): Observable<any> {
    this.setLoading(true);
    const request1 = this.http.get(`${this.apiUrl}/api/service`).pipe(
      catchError(() => {
        console.log('Error en la solicitud request1');
        return of(null);
      })
    );
    const request2 = this.http.get(`${this.apiUrl}/api/ver/persona/1`).pipe(
      catchError(() => {
        console.log('Error en la solicitud request2');
        return of(null);
      })
    );
    const request3 = this.http.get(`${this.apiUrl}/api/qwork`).pipe(
      catchError(() => {
        console.log('Error en la solicitud request3');
        return of(null);
      })
    );

    return forkJoin([request1, request2, request3]).pipe(
      // Se utiliza el operador tap para enviar un valor booleano a loadingSubject
      // cuando las solicitudes se han completado
      tap(() => this.setLoading(false))
    );
  }
}

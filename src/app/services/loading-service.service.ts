import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, forkJoin, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  url="https://portfolio-backend-dcm.onrender.com";
  private loadingSubject = new Subject<boolean>();
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) { }

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }

  // Método que realiza las solicitudes HTTP y espera a que todas se completen
  doRequests(): Observable<any> {
    this.setLoading(true);
    const request1 = this.http.get(`${this.url}/api/service`).pipe(
      catchError(() => {
        console.log('Error en la solicitud request1');
        return of(null);
      })
    );
    const request2 = this.http.get(`${this.url}/api/ver/persona/1`).pipe(
      catchError(() => {
        console.log('Error en la solicitud request2');
        return of(null);
      })
    );
    const request3 = this.http.get(`${this.url}/api/qwork`).pipe(
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

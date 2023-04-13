import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:8080/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log("El servicio de autenticacion esta corriendo")
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
   }

   IniciarSesion(credentials: any): Observable<HttpResponse<any>> {
    return this.http.post(this.url, credentials, { observe: 'response' }).pipe(
      map(response => {
        const bearerToken = response.headers.get('Authorization');
        if(bearerToken){
        const token = bearerToken.replace('Bearer', '');
        sessionStorage.setItem('token', token);
      }
        return response;
      })
    );
  }

  get UsuarioAuthenticado()
  {
    return this.currentUserSubject.value;
  }

}

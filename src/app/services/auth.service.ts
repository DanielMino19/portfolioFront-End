import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  apiUrl = environment.URL;
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const token = this.getToken();
    console.log("El servicio de autenticacion esta corriendo");
    this.getToken().subscribe(token => {
      if (token) {
        this.isLoggedIn.next(true);
      }
    });
   
  }

  verifyToken(token: string) {
    const body = { token };
    return this.http.post(`${this.apiUrl}/verify`, body);
  }

   Login(creds: any) {
    return this.http.post(`${this.apiUrl}/api/login`, creds, {
       observe: 'response' 
      }).pipe(map((response: HttpResponse<any>)=> {
        const body = response.body;
        const bearerToken = body.token
        if(bearerToken){
        const token = bearerToken.replace('Bearer ','');
        sessionStorage.setItem('token', token);
        this.isLoggedIn.next(true);
        return body;}
      })
    );
  }

  getToken() {
    const token = sessionStorage.getItem('token');

    if (token) {
      return this.verifyToken(token).pipe(
        map(() => token),
        catchError(() => of(null))
      );
    } else {
      return of(null);
    }
  }
}




import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private auth:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    var currentUser=this.auth.UsuarioAuthenticado;
    if(currentUser && currentUser.accesToken)
    {
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accesToken}`
        }
      })
    }
    console.log("interceptor esta corriendo" + JSON.stringify(currentUser));
    return next.handle(req);
  }
  
}

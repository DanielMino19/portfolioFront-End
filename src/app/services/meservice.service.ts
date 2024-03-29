import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeserviceService {

  apiUrl = environment.URL;

  constructor(private http: HttpClient) { }

 
  getAllService(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  
  getService(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  
  createService(serv: any): Observable<any> {
    return this.http.post(this.apiUrl, serv);
  }

 
  updateService(id: string, serv: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, serv);
  }

  
  deleteService(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}

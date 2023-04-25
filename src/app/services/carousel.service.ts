import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  apiUrl = 'https://portfolio-backend-dcm.onrender.com/api/swipper';

  constructor(private http: HttpClient) { }

 
  getAllSwipper(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

 
  getSwipper(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  
  createSwipper(quali: any): Observable<any> {
    return this.http.post(this.apiUrl, quali);
  }

 
  updateSwipper(id: string, quali: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, quali);
  }

 
  deleteSwipper(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

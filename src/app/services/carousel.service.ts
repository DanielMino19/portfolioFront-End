import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  apiUrl = environment.URL;

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


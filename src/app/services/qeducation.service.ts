import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QeducationService {

    
  apiUrl = environment.URL;

  constructor(private http: HttpClient) { }

  getAllQEducation(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getQEducation(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createQEducation(quali: any): Observable<any> {
    return this.http.post(this.apiUrl, quali);
  }

  updateQEducation(id: string, quali: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, quali);
  }

  deleteQEducation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

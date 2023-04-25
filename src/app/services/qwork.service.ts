import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QworkService {

  apiUrl = 'https://portfolio-backend-dcm.onrender.com/api/qwork';

  constructor(private http: HttpClient) { }

  getAllQWork(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getQWork(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createQWork(quali: any): Observable<any> {
    return this.http.post(this.apiUrl, quali);
  }

  updateQWork(id: string, quali: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, quali);
  }

  deleteQWork(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

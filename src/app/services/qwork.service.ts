import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QworkService {

  apiUrl = environment.URL;

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

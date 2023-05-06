import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsBackendServService {

   
  apiUrl = environment.URL;

  constructor(private http: HttpClient) { }

  getSkillsBackend(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSkillByIdBackend(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createSkillBackend(skill: any): Observable<any> {
    return this.http.post(this.apiUrl, skill);
  }

  updateSkillBackend(id: string, skill: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, skill);
  }
  
  deleteSkillBackend(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

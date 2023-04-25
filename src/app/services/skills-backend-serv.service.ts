import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsBackendServService {

   
  apiUrl = 'https://portfolio-backend-dcm.onrender.com/api/skillsbackend';

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

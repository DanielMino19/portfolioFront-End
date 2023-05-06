import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsServService {
 
  apiUrl = environment.URL;

  constructor(private http: HttpClient) { }

  getSkills(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSkillById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createSkill(skill: any): Observable<any> {
    return this.http.post(this.apiUrl, skill);
  }

  updateSkill(id: string, skill: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, skill);
  }

  deleteSkill(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}


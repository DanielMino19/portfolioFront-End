import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AboutmeServiceService {

    id : number = 1;
    apiUrl = environment.URL;
  

    constructor(private http: HttpClient) { }
    geetProfileInfo(): Observable<{imgSrc: string, description: string, experience: number, projects: number, companies: number}>{
      return this.http.get<{imgSrc: string, description: string, experience: number, projects: number, companies: number}>(`${this.apiUrl}/api/ver/aboutme/${this.id}`);
    }
    
    updateProfileInfo(Aboutme:{imgSrc: string, description: string, experience: number, projects: number, companies: number}): Observable<{imgSrc: string, description: string, experience: number, projects: number, companies: number}>{
      return this.http.put<{imgSrc: string, description: string, experience: number, projects: number, companies: number}>(`${this.apiUrl}/api/put/aboutme/${this.id}`, Aboutme);

    }


}


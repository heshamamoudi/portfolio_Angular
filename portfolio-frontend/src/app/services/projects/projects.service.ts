import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  getProjects():Observable<[]>
{
return this.http.get<[]>("http://localhost:8069/projects")
}
addProject(Project:any):Observable<any>
{
return this.http.post<any>("http://localhost:8069/projects",Project, {
  reportProgress: true,
  responseType: 'json'
})
}

}

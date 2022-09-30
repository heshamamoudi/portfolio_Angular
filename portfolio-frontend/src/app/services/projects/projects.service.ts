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
addProject():Observable<any>
{
 const project = {name:'hesham',description:"angular post",images:[]}
  console.log('im in')
return this.http.post<any>("http://localhost:8069/projects",project)
}

}

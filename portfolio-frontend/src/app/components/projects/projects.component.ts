import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  constructor(private projectsGetter:ProjectsService) { }

  ngOnInit(): void {
    this.projectsGetter.getProjects().subscribe((data) =>{
      console.log(data)
       this.projects= data
    })
  }
  onSubmit():void{
    let project;
     this.projectsGetter.addProject().subscribe(data =>{
project = data
     })
     console.log(project)
    // this.addProject({name:'hesham',description:'angular submit button',images:[]})
  }
addProject(Project:any){
this.projectsGetter.addProject()
}
}

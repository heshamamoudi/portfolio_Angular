import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  name: string = '';
  description: string = '';
  images: FileList | null = null;
  constructor(private projectsGetter: ProjectsService) {}

  ngOnInit(): void {
    this.projectsGetter.getProjects().subscribe((data) => {
      console.log(data);
      this.projects = data;
    });
  }
  onSubmit(): void {
    const formData = new FormData();
    console.log(this.name, this.description, this.images);
    formData.append('name', this.name);
    formData.append('description', this.description);
    if (this.images) {
      for (let index = 0; index < this.images.length; index++) {
        formData.append('images', this.images[index]);
      }
    }

    this.addProject(formData);
  }
  HandleFileInput(event: Event) {
    let event1 = event.target as HTMLInputElement;
    this.images = event1.files;
  }
  addProject(Project: any) {
    this.projectsGetter.addProject(Project).subscribe(
      (data) => {
        this.projects.push(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

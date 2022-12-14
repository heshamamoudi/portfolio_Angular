import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path:"", component:HeroComponent},
  {path:"contact", component:ContactComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"**", component:HeroComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

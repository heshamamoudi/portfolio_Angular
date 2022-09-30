import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
<<<<<<< HEAD
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 9f16bc7cd591b4b765d9976cdbfff47af2ef82fc




@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
<<<<<<< HEAD
    ProjectsComponent,
    ProjectItemComponent,
=======
    LoginComponent,
>>>>>>> 9f16bc7cd591b4b765d9976cdbfff47af2ef82fc


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

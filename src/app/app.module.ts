import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ServicesComponent } from './main/services/services.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { ResumeComponent } from './logic/resume/resume.component';
import { DownlodeComponent } from './logic/downlode/downlode.component';
import { ErrorPageComponent } from './main/error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { AdminRouteComponent } from './main/admin-route/admin-route.component';
import { CategoriesComponent } from './main/home/categories/categories.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ScrollYDirective } from './scroll-y.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ResumeComponent,
    DownlodeComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    AdminRouteComponent,
    CategoriesComponent,
    LoadingSpinnerComponent,
    ScrollYDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

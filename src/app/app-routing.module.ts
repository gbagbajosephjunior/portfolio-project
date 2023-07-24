import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownlodeComponent } from './logic/downlode/downlode.component';
import { ResumeComponent } from './logic/resume/resume.component';
import { AboutComponent } from './main/about/about.component';
import { AdminRouteComponent } from './main/admin-route/admin-route.component';
import { AuthGuard } from './main/adminRoute/auth.guard';
import { ContactComponent } from './main/contact/contact.component';
import { ErrorPageComponent } from './main/error-page/error-page.component';
import { CategoriesComponent } from './main/home/categories/categories.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { RegisterComponent } from './main/register/register.component';
import { ServicesComponent } from './main/services/services.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { OrdersRoutingModule } from './orders/orders-routing.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
 
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'Admin', component: AdminRouteComponent, canActivate: [AuthGuard],
  },
  {
    path: 'post', component: CategoriesComponent
  },
  
  {
    path: 'contacts', component: ContactComponent
  },
  {
    path: 'contacts/add', component: ContactComponent
  },
  {
    path: 'contacts/edit/:id', component: ContactComponent
  },
  
  {
    path: 'downlode', component: DownlodeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'testimonials', component: TestimonialsComponent
  },
  {
    path: 'resume', component: ResumeComponent
  },
   
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
 
  {
    path: '**', component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), OrdersRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

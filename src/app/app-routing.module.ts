import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';

const routes: Routes = [
  { path:"home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path:"contact-us",component:ContactUsComponent },
  { path:"register",component:RegisterationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

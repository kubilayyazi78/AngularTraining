import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './../../../AngularTraining2/src/app/login/login.component';
import { SettingsComponent } from './../../../AngularTraining2/src/app/settings/settings.component';
import { HomeComponent } from './../../../AngularTraining/src/app/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'Settings' ,component:SettingsComponent},
  {
    path:"Account",
    children:[
      {path:"Login",component:LoginComponent},
      {path:"Register",component:RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

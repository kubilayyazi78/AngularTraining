import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



function userControl(pageComponent:any){
  const userSt=sessionStorage.getItem("user")
  if(userSt!==null){
    return pageComponent
  }
  else{
    return  LoginComponent
  }

}

function userControlURL(url:string){
  const userSt=sessionStorage.getItem("user")
  if(userSt!==null){
    return url
  }
  else{
    return  ""
  }

}




const routes: Routes = [
  {path:"",component :LoginComponent},
  {path:"dashboard" ,component:DashboardComponent}
  //{path:"dashboard",redirectTo:userControl("dashboard") ,component:userControl(DashboardComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

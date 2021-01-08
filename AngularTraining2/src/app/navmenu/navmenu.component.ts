import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

   nameSurname=""

  constructor(private router:Router) {

    // const localUser=localStorage.getItem('user');
    // if(localStorage!==null){
       //rest control
      // sessionStorage.setItem('user',localUser);
     //}


     const userSt=sessionStorage.getItem("user")
     if(userSt!==null){
       const json=JSON.parse(atob(userSt))
       this.nameSurname=json.userName+" " +json.userSurname
     }
     else{
        this.router.navigate([""])
     }

  }

  ngOnInit(): void {



  }


fncLogOut():void{
  sessionStorage.removeItem("user")
  localStorage.removeItem("user")
  this.router.navigate([""])

}



}

import { Component, HostListener, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
enum keyAscii{
  enter =13
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

   userEmail=""
   userPass=""
  remember_me=false
  error=""
  constructor(private http:HttpClient , private router:Router ) { }

  ngOnInit(): void {
  }
//enter key event listener
@HostListener('window:keyup',['$event'])
keyEvent(e: KeyboardEvent):void{
  if(e.keyCode=== keyAscii.enter)
  {
    this.fncLogin()
  }
}

  isValid(email:string) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


  fncLogin(){

    if(this.userEmail==="" || this.userPass===""){
      this.error="Mail or Password Not Empty"
    }
    else if (!this.isValid(this.userEmail)){
      this.error="Mail Format Fail"
    }
    else {

      const params={
        ref:"5380f5dbcc3b1021f93ab24c3a1aac24",
        userEmail:this.userEmail,
        userPass:this.userPass,
        face:"no"
      }
  const url="http://jsonbulut.com/json/userLogin.php";
  this.http.get(url,{params:params})
  .toPromise()
  .then(response =>{

    const json=JSON.parse(JSON.stringify(response))
    const durum=json.user[0].durum
    const mesaj =json.user[0].mesaj
    console.log(durum)


    if(durum=== true){
      const bilgiler =json.user[0].bilgiler
      const user=JSON.stringify(bilgiler)
      //console.log(user)
      sessionStorage.setItem("user", btoa(user))

      if(this.remember_me===true){
            localStorage.setItem("user",btoa(user))
      }

      this.router.navigate(["dashboard"])
    }
    else{
      this.error=mesaj
    }


  }).catch(error=>{
    console.error(error)
  })
     // console.log(this.userEmail+" " +this.userPass+" "+ this.remember_me);
      this.error=""
    }

  }

}

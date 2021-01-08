import { Component, HostListener, OnInit } from '@angular/core';

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
  remember_me=""
  error=""
  constructor() { }

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
     // console.log(this.userEmail+" " +this.userPass+" "+ this.remember_me);
      this.error=""
    }

  }

}

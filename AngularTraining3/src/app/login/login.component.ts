import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators  } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   angForm : FormGroup;
  constructor(private formBuilder:FormBuilder) {

     this.angForm=this.formBuilder.group({

      mail: ["",Validators.required,Validators.email],
      ///mail: ["",Validators.required],
      pass:["",Validators.required]

     })

  }

  ngOnInit(): void {
  }

  fncLogin(pullData:any):void{
    console.log("submit"+JSON.stringify(pullData));
  }

}

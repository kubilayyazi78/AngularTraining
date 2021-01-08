import { RestService } from './../service/rest.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  redColor="red"
  greenColor="green"


  constructor(private restService:RestService) { }

  ngOnInit(): void {

    const params={}
    this.restService.funcCategory(params).then(res=>{

     console.log(res)

    })

    /*.catch(err=>{

        console.error(err)
    })*/
  }

}

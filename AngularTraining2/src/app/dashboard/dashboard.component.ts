import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

productArr=[]

  constructor(private http : HttpClient ) {
    const params={
   ref:"5380f5dbcc3b1021f93ab24c3a1aac24",
   start:"0"

    }
    const url="http://jsonbulut.com/json/product.php"

    this.http.get(url,{params:params}).toPromise().then(res=> {
    const json=JSON.parse(JSON.stringify(res));

    this.productArr=json.Products[0].bilgiler
//console.log(json.products[0].bilgiler)

    })
  }

  ngOnInit(): void {
  }

}

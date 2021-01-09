import { UserModel } from './../user-model';
import { NewsModel } from './../news-model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import *as $  from  'jquery'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  jsonObj:NewsModel|undefined;
  userArr: UserModel[] =[]

  constructor(private http:HttpClient) {
   const kubi:UserModel={
     age:10,
     id:5,
     mail:"asdasd",
     name:"ali"
   }
   // this.userArr?.push({id:10,name:"ali",age:25,mail:"asda@hotm.com"})
   this.userArr.push(kubi)

   }

  ngOnInit(): void {


    const params = {
      source :"",
      apiKey:""
    }
    const url =""

    this.http.get(url,{params:params}).toPromise().then(response => {

      this.jsonObj=response as NewsModel

    }).catch(err=>{
      console.log(err+" " +err.message);
    })

   this.userArr.map((item, index)=>{
    console.log(item.name)
   })

   this.fncExecute1().then(()=>{

     this.fncExecute2().then (()=>{

      this.fncExecute3().then (()=>{

        console.log("tamam")
      })

     })

   })


  // this.fncExecute2()
   //this.fncExecute3()

  }

  fncExecute1(){
    return new Promise <void>((resolve,reject)=>{
      console.log("fncExecute1")
       resolve()
    })

  }
  fncExecute2(){
    return new Promise<void>((resolve,reject)=>{

      setTimeout(()=>{
        console.log("fncExecute2")
        resolve()
      },2000)

    })


  }
  fncExecute3(){
    return new Promise<void>((resolve,reject)=>{

      console.log("fncExecute3")
      resolve()
    })

  }



}

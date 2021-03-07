import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NewsModel, Article } from '../news-model'
import { UserModel } from '../user-model'
import * as $ from 'jquery';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  jsonObj: NewsModel | undefined;
  newsArr: Article[] = [];
  userArr: UserModel[] = [];

  constructor( private http: HttpClient) {
    const ali1 :UserModel = {
      age: 36,
      id: 10,
      mail: "ali@gmail",
      name : "ali"
    }
    this.userArr.push(ali1)
    this.userArr.push(ali1)
    this.userArr.push(ali1)
  }

  ngOnInit(): void {



    const params = {
      sources: "google-news-in",
      apiKey: "38a9e086f10b445faabb4461c4aa71f8"
    }
    const url = "http://newsapi.org/v2/top-headlines";

    this.http.get(url, { params: params })
    .toPromise()
    .then(response => {

      this.jsonObj = response as NewsModel;
      console.log(this.jsonObj)
      this.newsArr = this.jsonObj.articles

    }).catch( err => {
      console.log("Error : " + err.message)
    })


    this.userArr.map( (item, index) => {
      console.log(item.name)
    } )

    this.fncExecute1().then( () => {
      this.fncExecute2().then( () => {
        this.fncExecute3().then( () => {
          console.log("All fnc Complete")
        })
      })
    })

    console.log("All Time Call")


    $(document).ready( () => {
      $("div#card").animate({right: 0});
    })

  }



  fncExecute1() {
    return new Promise<void>((resolve, reject) => {
      console.log("fncExecute1")
      resolve()
    })

  }

  fncExecute2() {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("fncExecute2")
        resolve()
      }, 4000);
    })


  }

  fncExecute3() {
    return new Promise<void>((resolve, reject) => {
      console.log("fncExecute3")
      resolve()
    })
  }



}

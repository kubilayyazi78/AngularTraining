import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestService {


  url="http://jsonbulut.com/json/"
  ref="5380f5dbcc3b1021f93ab24c3a1aac24"
  constructor(private http:HttpClient) { }

  async funcCategory(params: { [x: string]: string; }){

    params['ref']=this.ref

  return  await this.http.get(this.url+"companyCategory.php",{params:params}).toPromise()
  }
}

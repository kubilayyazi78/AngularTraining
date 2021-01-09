import { Injectable ,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketServiceService {

  basketArr:any=[]
  basketUpdated=new EventEmitter<Number>();


  constructor() { }

  fncBasketServiceAdd(item:any){
    this.basketArr.push(item)
   //this.basketUpdated.emit(this.basketArr.length);
   this.basketUpdated.emit(this.basketArr);
  }
}

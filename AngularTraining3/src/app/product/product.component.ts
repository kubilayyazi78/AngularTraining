import { BasketServiceService } from './../services/basket-service.service';
import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('surname',{static:true}) surname:ElementRef | undefined

  productArr=[
    {title:"Tablet",price:10},
    {title:"Tablet2",price:2},
    {title:"Tablet3",price:5},
    {title:"Tablet4",price:6}
  ]

  destroy=false;
  sampleData=1;

  math=Math;

  name =""

  constructor(private basketService:BasketServiceService) { }

  ngOnInit(): void {
  }

  fncAddBasket(item:any){
    this.basketService.fncBasketServiceAdd(item);
  console.log(item)
  }

  fncSendData():void{
    const surname=this.surname?.nativeElement.value
    console.log(this.name + " " + surname )
    this.surname?.nativeElement.focus()
  }

}

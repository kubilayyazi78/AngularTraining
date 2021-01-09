import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productArr=[
    {title:"Tablet",price:"10"},
    {title:"Tablet2",price:"2"},
    {title:"Tablet3",price:"5"},
    {title:"Tablet4",price:"6"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pageSlogan="Product Slogan";

  title=""
  detail=""
  //productArr=[{title:"",detail:""}]
  productArr=[]
  count=1
  constructor() { }

  ngOnInit(): void {
  }

  fncInsertProduct(){

   //console.log(this.title+" " + this.detail)

   if(this.title===""||this.detail===""){
     alert("Fail")
   }
   else{

    const item= {count:this.count,title:this.title,detail:this.detail}

    this.productArr.push(item)

    console.log(JSON.stringify(this.productArr))

    this.title=""
    this.detail=""
    this.count++;
   }

  }

}

import { productExtraData } from './../../data';
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
  productArr=productExtraData
  count=productExtraData[2].count+1
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
  fncDeleteProduct(id:Number){
    console.log(id)
   //this.productArr= this.productArr.slice(id,this.productArr.length)
 const answer=confirm("Silmek istediğine emin misinz ?")
 if(answer){
  this.productArr.splice(id,1)
  this.count--
 }


  }

}

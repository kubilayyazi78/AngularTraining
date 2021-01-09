import { BasketServiceService } from '../../services/basket-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   count:number=0;
   totalPrice:number=0


  constructor(private basketService:BasketServiceService) {

    this.basketService.basketUpdated.subscribe(
         (items:any) => {this.count=items.length;
          this.totalPrice=0
        items.map((item:any)=>{

           this.totalPrice+=item.price

        }
        )},

      )

   }

  ngOnInit(): void {
  }

}

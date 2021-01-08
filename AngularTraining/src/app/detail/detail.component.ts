import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   pullId=""
   pullData={}
  constructor(private route:ActivatedRoute) {

    const item=localStorage.getItem('item');
    if(item){
      try {
        this.pullData=JSON.parse(atob(item));
      } catch (error) {
        this.pullData={}
        alert("Invalidate Product Data")
      }

    }

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{

       this.pullId=params.get('id');

    })
  }

}

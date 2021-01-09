import { Component, OnInit ,OnChanges, SimpleChanges, Input , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit ,OnChanges , OnDestroy {




  @Input() sampleData:string | undefined;

  arr=[""]
  changes:SimpleChanges | undefined

  constructor() {
    console.log("cons")
    this.arr.push("constructor   call")
  }

  ngOnInit(): void {
    this.arr.push("ngOnInit  call")
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changes=changes;

    this.arr.push("ngOnChanges  call")
         console.log(changes)
  }

  ngOnDestroy(): void {

  }


}

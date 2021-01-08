import { Directive ,ElementRef,Input,OnInit} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input() appColor:string="";



  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {

    this.elementRef.nativeElement.style.backgroundColor=this.appColor;
  }

}

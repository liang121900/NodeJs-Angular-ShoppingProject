import { ElementRef,Directive,HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  @Input("appChangeColor")
  color:string;

  //<H2>
  constructor(private elementRef:ElementRef) { 
   
  }

  public ngOnInit(){
    console.log("this.color = "+this.color);
    this.elementRef.nativeElement.style.backgroundColor=this.color;
    this.elementRef.nativeElement.style.color="white";
  }

  @HostListener('mouseenter')
  public onMouseEnter():void {
      this.elementRef.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseleave')
  public onMouseLeave():void {
      this.elementRef.nativeElement.style.backgroundColor="green";
  }

}

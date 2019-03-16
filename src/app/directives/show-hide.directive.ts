import { Directive,TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[showHide]'
})
export class ShowHideDirective {
  /**
   * 
   * @param templateRef - what template you want to inject 
   * @param viewContainer  - where you want to inject
   */
  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { 
  }


  //@Input we are appying for the setter
  @Input()
  set showHide(condition:boolean){
     if(condition){
        this.viewContainer.createEmbeddedView(this.templateRef);
     }else{
        this.viewContainer.clear();
     }

  }



}

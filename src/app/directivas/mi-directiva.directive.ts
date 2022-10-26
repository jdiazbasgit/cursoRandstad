import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(private el:ElementRef,render:Renderer2) { 
    let h2 = document.createElement('h2');
    h2.innerHTML="soy un nuevo título h2";
    h2.classList.add("text-danger"); 
    
    render.appendChild(el.nativeElement, h2)
    
    let h3 = document.createElement('h3');
    h3.innerHTML="soy un nuevo título h3";
    h3.classList.add("text-success");

    render.appendChild(el.nativeElement, h3);
    render.setStyle(el.nativeElement,"background-color","#fabada");
    render.addClass(el.nativeElement,"rounded");
  }

}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]',
})
export class MiDirectivaDirective {
  constructor(private el: ElementRef, render: Renderer2) {
    let h1 = document.createElement('h1');
    h1.innerHTML="soy el H1"
    h1.classList.add("text-danger")
    render.appendChild(el.nativeElement,h1)
    let h2=document.createElement("h2")
    h2.innerHTML="soy el H2"
    h2.classList.add("text-success")
    render.appendChild(el.nativeElement,h2)
    render.setStyle(el.nativeElement,"background-color","#fabada")
    render.addClass(el.nativeElement,"rounded")
  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMiDirectivaEstructural]'
})
export class MiDirectivaEstructuralDirective {

  constructor(private el:ElementRef) { }

  @HostListener("mouseover")
  cargaImagenNoDisponible():void{
    this.el.nativeElement.src="https://media.maximilianojabugo.com/media/catalog/product/cache/4867832e91593742c10676c2b278b456/0/5/0503.jpg";
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    let salida = value.toUpperCase().substring(args[0], args[1]);
    for (let i = 0; i < args[2]; i++) {
      salida += '-';
    }
    for (let i = 0; i < args[3]; i++) {
      salida += '+';
    }
    return salida;
  }
}

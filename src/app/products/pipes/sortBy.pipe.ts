import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | '' ): Hero[] {
    switch( sortBy ) {
      case 'nombre':
        return heroes.sort( (a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'canFly':
        return heroes.sort( (a, b) => (a.canFly > b.canFly) ? 1 : -1);
      case 'color':
        return heroes.sort( (a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return [...heroes];
    }
  }
}

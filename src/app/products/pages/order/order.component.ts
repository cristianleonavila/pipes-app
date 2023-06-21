import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public toUpper:boolean = false;

  public items: MenuItem[] = [];

  public sortBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      nombre: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      nombre: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      nombre: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      nombre: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ];

  public toggleUpperCase():void {
    this.toUpper = !this.toUpper;
  }

  public changeOrder(column: keyof Hero) {
    this.sortBy = column;
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  private items:MenuItem[] = [];

  get getMenuItems():MenuItem[] {
    return this.items;
  }
  ngOnInit(): void {
    this.items = [
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left'
            },
            {
              label: 'Números',
              icon: 'pi pi-dollar'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe'
            },                        
          ] 
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog'
      }
    ];
  }
}

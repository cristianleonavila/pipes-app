import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name:string = 'Cristian Leon';
  public gender: 'male'|'female' = 'male';
  public clientes:string[] = ['Cristian', 'Lorena', 'Pedro', 'Ismael', 'Hernan', 'Juan', 'Mojarra'];
  public persona = {
    nombre: 'Cristian Leon',
    documento: 1136880153
  };
  public map = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  public timer = interval(2000).pipe(
    tap( value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject ) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa");
      console.log("Promesa en curso...");
    }, 3500);
  });

  public changeClient():void {
    this.name = 'Lorena';
    this.gender = 'female';
  }
  public finalizarTurno():void {
    this.clientes.shift();
  }
}

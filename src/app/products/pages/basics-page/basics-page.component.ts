import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public namelcase:string = 'cristian';
  public nameucase:string = 'CRISTIAN';
  public fullName:string = 'cRisTiaN CAmiLO leOn aVilA';
  public customDate:Date = new Date();
}

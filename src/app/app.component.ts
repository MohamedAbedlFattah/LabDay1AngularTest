import { Component } from '@angular/core';

@Component({
  selector: 'custom-root',
  template:`<h2>this is inline templet</h2>
  <h3>this is Propperty Interpolation </h3>
  <p>!{{title}} </p>
  <h3>this is Function Interpolation </h3>
  <p>!{{SayHello('Mohamed AbdelFattah')}} </p>`,
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {

  title:string="Lab Day 1 Angular";
  SayHello(name:string):string
  {
    return `Hello ${name}`;
  }
}

import { Component } from '@angular/core';
import { ICar } from '../shared/models/car';

@Component({
   templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  public newCar: ICar = {
    id: 1,
    mark: "Audi",
    model: "A4",
    regnumber: "KS XXXXX",
    nrvin: 12334556,
    course: 250000,
    descfault: "szyba"
  }

  public opis: string = "Do zrobienia";

  add(){
    debugger;
  }


}
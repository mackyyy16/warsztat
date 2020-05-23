import { Component } from '@angular/core';
import { ICar } from '../shared/models/car';

@Component({
   templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  public newCar: ICar = {
    id: 1,
    marka: "Audi",
    model: "A4",
    nrRejestracyjny: "KS XXXXX",
    nrVin: 12334556,
    przebieg: 250000
  }

  public opis: string = "Do zrobienia";

  add(){
    debugger;
  }


}
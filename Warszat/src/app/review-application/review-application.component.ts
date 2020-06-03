import { Component } from '@angular/core';
import { ICar } from '../shared/models/car';
import { IRepair } from '../shared/models/repair';

@Component({
   templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent {
  public newCar: ICar = {
    id: 1,
    marka: "Audi",
    model: "A4",
    nrRejestracyjny: "KS XXXXX",
    nrVin: 12334556,
    przebieg: 250000
  }

  public repairInfo: IRepair = {
    id: 123,
    dataRozpoczecia: new Date(),
    dataZakoczenia: new Date(),
    status: "Realizacji",
    opis: "Tralala",
    koszt: 1500.20
  }

  showInfo: boolean = false;
  isWorker: boolean = true;
  nrZgloszenia: number;

  public opis: string = "Do zrobienia";

  show(){
    if(this.nrZgloszenia === this.repairInfo.id){
      this.showInfo = true;
    }
    else{
      this.showInfo = false;
    }
  }


}
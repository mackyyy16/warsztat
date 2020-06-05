import { Component } from '@angular/core';
import { ICar } from '../shared/models/car';
import { IRepair } from '../shared/models/repair';

@Component({
   templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent {
  public newCar: ICar = {
    id_car: 1,
    mark: "Audi",
    model: "A4",
    regnumber: "KS XXXXX",
    nrvin: 12334556,
    course: 250000,
    descfault: "drzwi"
  }

  public repairInfo: IRepair = {
    id_repair: 123,
    start_date: "12.12.2019",
    end_date: "01.01.2020",
    status: "Realizacji",
    description: "Tralala",
    price: 1500.20
  }

  showInfo: boolean = false;
  isWorker: boolean = true;
  nrZgloszenia: number;

  public opis: string = "Do zrobienia";

  show(){
    if(this.nrZgloszenia === this.repairInfo.id_repair){
      this.showInfo = true;
    }
    else{
      this.showInfo = false;
    }
  }


}
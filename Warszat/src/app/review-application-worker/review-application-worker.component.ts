import { Component } from '@angular/core';
import { IRepair } from '../shared/models/repair';
import { CarService } from '../shared/http-services/carService';
import { ICar } from '../shared/models/car';
import { RepairService } from '../shared/http-services/repairService';
import { RepairPartService } from '../shared/http-services/repairPartService';
import { IPart } from '../shared/models/part';
import { IPartWithAmount } from '../shared/models/part-with-amount';

@Component({
   templateUrl: './review-application-worker.component.html',
  styleUrls: ['./review-application-worker.component.css']
})
export class ReviewApplicationWorkerComponent {
  applicationsArray = 
  [
    {
      id: 1,
      marka: "Audi",
      model: "A4",
      nrRejestracyjny: "KS XXXXX",
      nrVin: 12334556,
      przebieg: 250000,
      data:
      {
        id: 123,
        dataRozpoczecia: new Date(),
        dataZakoczenia: new Date(),
        status: "Realizacji",
        opis: "Tralala",
        koszt: 1500.20
      }
    },
    {
      id: 2,
      marka: "BMW",
      model: "X4",
      nrRejestracyjny: "KS 11111",
      nrVin: 23424324,
      przebieg: 5345435,
      data:
      {
        id: 125,
        dataRozpoczecia: new Date(),
        dataZakoczenia: new Date(),
        status: "Zakończono",
        opis: "SSSS",
        koszt: 33300.20
      }
    },
    {
      id: 3,
      marka: "Opel",
      model: "Insignia",
      nrRejestracyjny: "KS 00000",
      nrVin: 211111,
      przebieg: 53333,
      data:
      {
        id: 126,
        dataRozpoczecia: new Date(),
        dataZakoczenia: new Date(),
        status: "Przyjęto",
        opis: "V",
        koszt: 334400.20
      }
    }
  ];

  applications: ICar[] = [];
  rapairInfo: IRepair;
  partsInfo: IPartWithAmount[] = [];
  show:boolean = false;

  constructor(private carService: CarService,
              private repairService: RepairService,
              private repairPartService: RepairPartService){

    this.carService.getCars().subscribe({
      next:carsFromApi => this.applications=carsFromApi,
      error:err => err=err
    });
  }

  showInfo(app:ICar){
    debugger;

    this.repairService.getRepair(app.id_repair).subscribe({
      next:carsFromApi => this.rapairInfo=carsFromApi,
      error:err => err=err
    });

    this.repairPartService.getPartPerRepair(app.id_repair).subscribe({
      next:partPerRepairFromApi => this.partsInfo=partPerRepairFromApi,
      error:err => err=err
    });

    this.show = true;
  }

  removeApp(app:ICar){
    let val;
    this.carService.removeCar(app).subscribe({
      next:carsFromApi => val = carsFromApi,
      error:err => err=err
    });
    
    //odśwież listę
  }

  // save(){
  //   this.applicationsArray.forEach(app => {
  //     if(app.data.id === this.rapairInfo.id){
  //       app.data = this.rapairInfo;
  //     }
  //   });
  // }
}
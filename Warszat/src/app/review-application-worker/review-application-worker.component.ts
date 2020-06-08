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
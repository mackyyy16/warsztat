import { Component } from '@angular/core';
import { ICar } from '../shared/models/car';
import { IRepair } from '../shared/models/repair';
import { CarService } from '../shared/http-services/carService';
import { RepairService } from '../shared/http-services/repairService';

@Component({
   templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent {

  showInfo: boolean = false;
  isWorker: boolean = true;
  nrZgloszenia: number;

  public newCar: ICar;
  public cars: ICar[] = [];
  public repairInfo: IRepair;

  constructor(private carService: CarService,
              private repairService: RepairService){

  }

  show(){

    this.carService.getCars().subscribe({
      next:carsFromApi => this.cars=carsFromApi,
      error:err => err=err
    })

    if(this.cars.length !== 0){
      
      let findedRepair = this.cars.filter(q => q.id_car === this.nrZgloszenia);

      if(findedRepair.length !== 0){
        debugger;

        this.newCar = findedRepair[0];

        this.repairService.getRepair(findedRepair[0].id_repair).subscribe({
          next:carsFromApi => this.repairInfo=carsFromApi,
          error:err => err=err
        })
      }
    }    

    if(this.nrZgloszenia === this.repairInfo.id_repair){
      this.showInfo = true;
    }
    else{
      this.showInfo = false;
    }
  }


}
import { Component } from '@angular/core';
import { ICar } from '../shared/models/car';
import { IRepair } from '../shared/models/repair';
import { CarService } from '../shared/http-services/carService';
import { RepairService } from '../shared/http-services/repairService';
import { IPartWithAmount } from '../shared/models/part-with-amount';
import { RepairPartService } from '../shared/http-services/repairPartService';

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
  public partsInfo : IPartWithAmount[];

  constructor(private carService: CarService,
              private repairService: RepairService,
              private repairPartService: RepairPartService){
    
    this.carService.getCars().subscribe({
      next:carsFromApi => this.cars=carsFromApi,
      error:err => err=err
    });
            
  }

  show(){   
      
      let findedRepair = this.cars.filter(q => q.id_car === this.nrZgloszenia);

      debugger;

      this.newCar = findedRepair[0];

      this.carService.getCarRepair(findedRepair[0].id_repair).subscribe({
        next:carsFromApi => this.repairInfo=carsFromApi,
        error:err => err=err
      });

      this.repairPartService.getPartPerRepair(findedRepair[0].id_repair).subscribe({
        next:partPerRepairFromApi => this.partsInfo=partPerRepairFromApi,
        error:err => err=err
      });

    if(this.nrZgloszenia === this.repairInfo.id_repair){
      this.showInfo = true;
    }
    else{
      this.showInfo = false;
    }
  }


}
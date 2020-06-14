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
  public showErrorMessage: boolean = false;

  public newCar: ICar;
  public cars: ICar[] = [];
  public repairInfo: IRepair;
  public partsInfo : IPartWithAmount[];

  constructor(private carService: CarService,
              private repairService: RepairService,
              private repairPartService: RepairPartService){
    
    this.carService.getCars().then(carsFromApi => {
      this.cars=carsFromApi;
    });            
  }

  async show(){   
      
      let findedRepair = this.cars.filter(q => q.id_car === this.nrZgloszenia);

      if(findedRepair.length !== 0){

        debugger;
        
        this.newCar = findedRepair[0];
        
        await this.carService.getCarRepair(findedRepair[0].id_repair).then(carsFromApi => {
          this.repairInfo=carsFromApi;
        });
        
        this.repairPartService.getPartPerRepair(findedRepair[0].id_repair).then(partPerRepairFromApi => {
          this.partsInfo=partPerRepairFromApi;
        });
        
        if(this.nrZgloszenia === this.repairInfo.id_repair){
          this.showInfo = true;
        }
        else{
          this.showInfo = false;
        }
        this.showErrorMessage = false;
      }else{
        this.showErrorMessage = true;
        //nie ma takiego zgłoszenia
      }
  }
}
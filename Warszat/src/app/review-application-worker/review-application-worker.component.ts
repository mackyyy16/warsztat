import { Component } from '@angular/core';
import { IRepair } from '../shared/models/repair';
import { CarService } from '../shared/http-services/carService';
import { ICar } from '../shared/models/car';
import { RepairService } from '../shared/http-services/repairService';
import { RepairPartService } from '../shared/http-services/repairPartService';
import { IPart } from '../shared/models/part';
import { IPartWithAmount } from '../shared/models/part-with-amount';
import { IRepairPart } from '../shared/models/repair-part';
import { PartService } from '../shared/http-services/partService';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
   templateUrl: './review-application-worker.component.html',
  styleUrls: ['./review-application-worker.component.css']
})
export class ReviewApplicationWorkerComponent {
  
  applications: ICar[] = [];
  rapairInfo: IRepair;
  partsPerRepairInfo: IPartWithAmount[] = [];
  partsPerRepairAll: IRepairPart[] = [];
  show:boolean = false;
  showParts: boolean = false;
  selectedValue: string = "";
  partsListToCombo: string[] = [];
  partsFromDb: IPart[] = [];
  enteredQuantity: number;
  selectedApp: ICar;
  previousPartId = 0;

  constructor(private carService: CarService,
              private repairService: RepairService,
              private repairPartService: RepairPartService,
              private partsService: PartService){

    this.carService.getCars().then(carsFromApi => {
      this.applications = carsFromApi;
    });  

    this.partsService.getParts().then(partsFromApi => {
      this.partsFromDb = partsFromApi;

      for (let index = 0; index < this.partsFromDb.length; index++) {
        let element = this.partsFromDb[index];
        let value = element.name + " - " + element.producer;
        this.partsListToCombo.push(value);          
      }

      this.partsListToCombo.sort();
    });

    this.repairPartService.getRepairParts().subscribe({
      next: partsPerRepairFromApi => this.partsPerRepairAll = partsPerRepairFromApi,
      error: err => err = err
    });
    debugger;
  }

  showInfo(app:ICar){
    debugger;
    this.selectedApp = app;

    this.repairService.getRepair(app.id_repair).subscribe({
      next:carsFromApi => this.rapairInfo=carsFromApi,
      error:err => err=err
    });

    this.repairPartService.getPartPerRepair(app.id_repair).then(partPerRepairFromApi => {
      this.partsPerRepairInfo = partPerRepairFromApi;

        if(partPerRepairFromApi.length == 0){
          this.showParts = false;
        }else{
          this.showParts = true;
        }
    });    

    this.show = true;
  }

  async removeApp(app:ICar){
    await this.carService.removeCar(app);
    
    //odświeżenie listy
    await this.carService.getCars().then(carsFromApi => {
      this.applications = carsFromApi;
    });  

    this.show = false;
  }

  async save(){
    debugger;

    if(this.selectedValue && this.enteredQuantity){
      let name = this.selectedValue.split(' - ')[0];
      let producer = this.selectedValue.split(' - ')[1];

      let part = this.partsFromDb
        .filter(q => q.name.includes(name) && q.producer.includes(producer));

      let repairPart: IRepairPart = {
        id: 0,
        amount: this.enteredQuantity,
        id_part: part[0].id_part,
        id_repair: this.selectedApp.id_repair
      };

      //set next id
      let sortedPartsPerRepairAll = [...this.partsPerRepairAll.sort((a, b) => a.id - b.id).reverse()];
      let newPartPerRepairId = sortedPartsPerRepairAll[0].id + 1;

      if(this.previousPartId === 0){
        this.previousPartId = newPartPerRepairId;
        repairPart.id = newPartPerRepairId;
      }else{
        this.previousPartId = this.previousPartId + 1;
        repairPart.id = this.previousPartId;
      }
      //

      debugger;
      //send repairPerPart
      await this.repairPartService.addRepairPart(repairPart); 

      //odświeżyć listę
      this.repairPartService.getPartPerRepair(this.selectedApp.id_repair).then(partPerRepairFromApi => {
        this.partsPerRepairInfo = partPerRepairFromApi;
  
          if(partPerRepairFromApi.length == 0){
            this.showParts = false;
          }else{
            this.showParts = true;
          }
      });    
    }

    let val1;
    this.repairService.updateRepair(this.rapairInfo).subscribe({
      next: repairFromApi => val1 = repairFromApi,
      error: err => err = err
    });
  }
}
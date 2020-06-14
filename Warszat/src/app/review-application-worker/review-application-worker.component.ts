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
import { UserService } from '../shared/http-services/userService';
import { UserRepairService } from '../shared/http-services/userRepairService';
import { IUser } from '../shared/models/user';
import { IUserRepair } from '../shared/models/user-repair';

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
  selectedUserToRepair: string = "";
  partsListToCombo: string[] = [];
  usersListToCombo: string[] = [];
  partsFromDb: IPart[] = [];
  enteredQuantity: number;
  selectedApp: ICar;
  previousPartId = 0;
  users: IUser[] = [];
  repairUser: IUser;

  constructor(private carService: CarService,
              private repairService: RepairService,
              private repairPartService: RepairPartService,
              private partsService: PartService,
              private userService: UserService,
              private userRepairService: UserRepairService){

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

    this.userService.getUser().then(usersFromApi => {

      usersFromApi.forEach(element => {
        if(element.role === "worker"){
          this.users.push(element);
          this.usersListToCombo.push(element.name);
        }
      });
    });
    debugger;
  }

  async showInfo(app:ICar){
    debugger;
    this.selectedApp = app;

    
    await this.repairService.getRepair(app.id_repair).then(carsFromApi => {
      this.rapairInfo=carsFromApi;
    });
    
    await this.userRepairService.getUserRepair(this.rapairInfo).then(userFromApi => {
      if(userFromApi){
        this.repairUser = userFromApi;
        this.selectedUserToRepair = userFromApi.name;
      }else{
        this.selectedUserToRepair = '';
        this.repairUser = undefined;
      }
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

    if(!this.repairUser){
      //add
      debugger;
      let newId = 0;

      await this.userRepairService.getUserRepairs().then(data =>{
        let sortedList = [...data.sort((a, b) => a.id - b.id).reverse()];
        newId = sortedList[0].id + 1;
      });

      let newUserRepair: IUserRepair = {
        id: newId,
        id_repair: this.selectedApp.id_repair,
        id_user: this.users.filter(q => q.name === this.selectedUserToRepair)[0].id_user
      };

      let val;
      this.userRepairService.addUserRepair(newUserRepair).subscribe({
        next: addUser => val = addUser,
        error: err => err = err
      });
    }else{
      //update
      let userRepairLocal: IUserRepair;
      await this.userRepairService.getUserRepairs().then(data => {
        userRepairLocal = data.filter(q => q.id_repair === this.selectedApp.id_repair)[0];
      });

      if(userRepairLocal){
        userRepairLocal.id_user = this.users.filter(q => q.name === this.selectedUserToRepair)[0].id_user;
        
        let val;
        this.userRepairService.updateUserRepair(userRepairLocal).subscribe({
          next: updateUserRepairValue => val = updateUserRepairValue,
          error: err => err = err
        });
      }
    }
  }
}
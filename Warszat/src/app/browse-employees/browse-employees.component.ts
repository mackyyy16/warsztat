import { Component } from '@angular/core';
import { IUser } from '../shared/models/user';
import { UserService } from '../shared/http-services/userService';
import { IRepair } from '../shared/models/repair';
import { UserRepairService } from '../shared/http-services/userRepairService';

@Component({
   templateUrl: './browse-employees.component.html',
  styleUrls: ['./browse-employees.component.css']
})
export class BrowseEmployeesComponent {
  public users: IUser[] = [];
  public showRepairs: boolean = false;
  public userRepairsInfo: IRepair[] = [];

  constructor(private userService: UserService,
              private userRepairSevice: UserRepairService){
    this.userService.getUser().then(data => {
      this.users = data;
    });
  }

  async showUserRepair(user: IUser){
    await this.userRepairSevice.getRepairsPerUser(user.id_user).then(userRapirFromApi => {
      this.userRepairsInfo = userRapirFromApi;

      if(userRapirFromApi.length !== 0)
        this.showRepairs = true;
      else
        this.showRepairs = false;
    });    
  }

  async removeUser(user: IUser){
    debugger;
    let val;
    
    await this.userService.removeUser(user);

    //dodać odświeżanie listy
    await this.userService.getUser().then(data => {
      this.users = data;
    });
  }
}

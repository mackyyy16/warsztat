import { Component } from '@angular/core';
import { IUser } from '../shared/models/user';
import { UserService } from '../shared/http-services/userService';

@Component({
   templateUrl: './browse-employees.component.html',
  styleUrls: ['./browse-employees.component.css']
})
export class BrowseEmployeesComponent {
  public users: IUser[] = [];

  constructor(private userService: UserService){
    this.userService.getUser().then(data => {
      this.users = data;
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

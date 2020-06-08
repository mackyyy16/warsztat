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
    this.userService.getUser().subscribe({
      next: usersFromApi => this.users = usersFromApi,
      error: err => err = err
    });
  }

  removeUser(user: IUser){
    debugger;
    let val;
    
    this.userService.removeUser(user).subscribe({
      next: usersFromApi => val = usersFromApi,
      error: err => err = err
    });
    //dodać odświeżanie listy
  }
}

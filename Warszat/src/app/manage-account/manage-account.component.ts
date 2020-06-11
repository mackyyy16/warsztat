import { Component } from '@angular/core';
import { MenuBarService } from '../shared/MenuBarService';
import { IUser } from '../shared/models/user';
import { UserService } from '../shared/http-services/userService';

@Component({
   templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent {

  public user: IUser = this.menuBarService.loggedUser;

  constructor(private menuBarService: MenuBarService,
              private userService: UserService){
  }

  save(){
    let val;
    this.userService.updateUser(this.user).subscribe({
      next: usersFromApi => val = usersFromApi,
      error: err => err = err
    })
  }
}
import { Component } from '@angular/core';
import { UserService } from '../shared/http-services/userService';
import { IUser } from '../shared/models/user';

@Component({
   templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public isMen: boolean = false;

  public user: IUser = {
    name: 'Janek',
    surname: 'Poreba',
    login: 'JP',
    password: 'asd',
    email: 'asd@ad.ok',
    dateofbirth: '123.23',
    phonenumber: 44,
    idclient: 5,
    idrepair: 3,
    sex: 'm',
    role: 'worker'
  };

  constructor(private userService: UserService){

  }

  register()
  {
    debugger;
    let val;
    let err;

    this.userService.addUser(this.user).subscribe({
      next: usersFromApi => val = usersFromApi,
      error:err => err=err
    });
  }

  men(){
    this.isMen = true;
  }

  women(){
    this.isMen = false;
  }
}

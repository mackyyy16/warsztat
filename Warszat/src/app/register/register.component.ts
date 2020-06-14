import { Component } from '@angular/core';
import { UserService } from '../shared/http-services/userService';
import { IUser } from '../shared/models/user';
import { Router } from '@angular/router';

@Component({
   templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public isMen: string = "";
  public isWomen: boolean = false;
  public users: IUser[] = [];
  public previousPartId = 0;

  public user: IUser = {
    name: '',
    surname: '',
    login: '',
    password: '',
    email: '',
    dateofbirth: '',
    phonenumber: null,
    id_user: 0,
    sex: '',
    role: ''
  };

  constructor(private userService: UserService,
              private router: Router){
    this.userService.getUser().then(data => {
      this.users = data;
    });
  }

  register()
  {
    debugger;
    let val;
    let err;

    let sortedUsers = [...this.users.sort((a, b) => a.id_user - b.id_user).reverse()];
    let newUserId = sortedUsers[0].id_user + 1;

    if(this.previousPartId === 0){
      this.previousPartId = newUserId;
      this.user.id_user = newUserId;
    }else{
      this.previousPartId = this.previousPartId + 1
      this.user.id_user = this.previousPartId;
    }

    if(this.isMen === "true"){
      this.user.sex = "men";
    }else{
      this.user.sex = "women";
    }

    this.user.role = "worker";
    this.userService.addUser(this.user).subscribe({
      next: usersFromApi => val = usersFromApi,
      error:err => err=err
    });

    this.router.navigate(['/home']);
  }
}

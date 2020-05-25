import { Component } from '@angular/core';
import { UserService } from '../shared/http-services/userService';
import { IUser } from '../shared/models/user';

@Component({
   templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // tslint:disable-next-line: no-inferrable-types
  public nick: string = "xxx";
  public password: string = "xxx";
  public users: IUser[]=[];
  public showmessage: boolean=false;
  public errormessage: string="";


  login()
  {
    // sprawdzanie czy użytkownik jest w bazie
    debugger;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.users.length; index++) {
      let user = this.users[index];

      if (user.login === this.nick && user.password === this.password){
      this.showmessage = true
    }

    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit():void{
    this.userService.getUser().subscribe({
      next:usersFromApi => this.users=usersFromApi,
      error:err => this.errormessage=err
    })
  }

  constructor(private userService:UserService){

  }
}
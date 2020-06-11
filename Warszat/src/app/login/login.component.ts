import { Component } from '@angular/core';
import { UserService } from '../shared/http-services/userService';
import { IUser } from '../shared/models/user';
import { MenuBarService } from '../shared/MenuBarService';

@Component({
   templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public nick: string = "";
  public password: string = "";
  public users: IUser[]=[];
  public showmessage: boolean=false;
  public errormessage: string="";
  public message: string = "";


  login()
  {
    debugger;
    let isLogged = false;

    for (let index = 0; index < this.users.length; index++) {
      let user = this.users[index];

      if (user.login === this.nick && user.password === this.password){
        this.message = "Pomyślnie zalogowano jako " + this.nick;

        if(user.role === 'admin'){
          this.menuBarService.showAdminComponent();
          this.message = this.message + " - administrator";
        }else{
          this.menuBarService.showWorkerComponent();
        }

        isLogged = true;
        break;
      }else{        
        this.message = "Nie ma takiego użytkownika";    
      }
    }

    if(!isLogged){
      this.menuBarService.hideAdminComponent();
      this.menuBarService.hideWorkerComponent();
    }

    this.showmessage = true
  }

  ngOnInit():void{
    this.userService.getUser().subscribe({
      next:usersFromApi => this.users=usersFromApi,
      error:err => this.errormessage=err
    })
  }

  constructor(private userService: UserService,
              private menuBarService: MenuBarService){

  }
}
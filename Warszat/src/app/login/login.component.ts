import { Component } from '@angular/core';

@Component({
   templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public nick: string = "xxx";
  public password: string = "xxx";
  
  login()
  {
    //sprawdzanie czy użytkownik jest w bazie
    debugger;
  }


}
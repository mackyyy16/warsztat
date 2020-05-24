import { Component } from '@angular/core';

@Component({
   templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public name: string = "Jan";
  public surname: string = "Kowalski";
  public sex: string = "m";
  public login: string = "1234";
  public password: string = "1234";
  public email: string = "jankowalski@gmail.com";
  public dateofbirth: string = "12.12.1993";
  public phonenumber: string = "702534123";

  register()
  {
    debugger;
  }
}

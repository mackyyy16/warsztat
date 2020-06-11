import { Component } from '@angular/core';
import { MenuBarService } from './shared/MenuBarService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Warszat';

  constructor(public menuBarService: MenuBarService,
              private router: Router){ }

  logOff(){
    this.menuBarService.hideAdminComponent();
    this.menuBarService.hideWorkerComponent();

    //navigate to home
    this.router.navigate(['/home']);
  }
}

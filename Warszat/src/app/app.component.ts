import { Component } from '@angular/core';
import { MenuBarService } from './shared/MenuBarService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Warszat';

  constructor(public menuBarService: MenuBarService){ }
}

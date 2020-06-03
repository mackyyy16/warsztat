import { Component } from '@angular/core';

@Component({
   templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent {

  //dodaj silne typowanie
  public newPart = {
    id: 1,
    name: "Opona letnia",
    producent: "Dębica",
    price: "249.55"
  };

  add(){
    debugger;
  }
}
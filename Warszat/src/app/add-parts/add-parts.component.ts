import { Component } from '@angular/core';
import { PartService } from '../shared/http-services/partService';
import { IPart } from '../shared/models/part';

@Component({
   templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent {

  public newPart: IPart = {
    id_part: 1,
    name: "Opona letnia",
    producer: "Dębica",
    price: 150
  };
  
  public parts: IPart[] = [];
  public previousPartId = 0;
  public showMessage: boolean = false;

  constructor(private partService: PartService){
    this.partService.getParts().then(data => {
      this.parts = data;
    });
  }

  add(){
    debugger;
    let parts;
  
    let sortedParts = [...this.parts.sort((a, b) => a.id_part - b.id_part).reverse()];
    let newPartId = sortedParts[0].id_part + 1;

    if(this.previousPartId === 0){
      this.previousPartId = newPartId;
      this.newPart.id_part = newPartId;
    }else{
      this.previousPartId = this.previousPartId + 1
      this.newPart.id_part = this.previousPartId;
    }

    this.partService.addPart(this.newPart).subscribe({
      next: partsFromApi => parts = partsFromApi,
      error:err => err=err
    }); 
    this.showMessage = true;
  }
}
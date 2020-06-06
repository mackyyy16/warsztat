import { Component } from '@angular/core';
import { IPart } from '../shared/models/part';
import { PartService } from '../shared/http-services/partService';

@Component({
   templateUrl: './review-parts.component.html',
  styleUrls: ['./review-parts.component.css']
})
export class ReviewPartsComponent {

  public parts: IPart[] = [];  

  constructor(private partService: PartService){
    this.partService.getParts().subscribe({
      next: partsFromApi => this.parts = partsFromApi,
      error:err => err=err
    });
  }
  
  removePart(part: any){
    debugger;
    let val;
    this.partService.removePart(part).subscribe({
      next: partsFromApi => val = partsFromApi,
      error:err => err=err
    });

    //odśwież listę części
  }
}
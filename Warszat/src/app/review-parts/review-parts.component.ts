import { Component } from '@angular/core';

@Component({
   templateUrl: './review-parts.component.html',
  styleUrls: ['./review-parts.component.css']
})
export class ReviewPartsComponent {
  public newPartArray = 
  [ 
    {
      id: 1,
      name: "Opona letnia",
      producent: "Dębica",
      price: "249.55"
    },
    {
      id: 2,
      name: "Wycieraczki",
      producent: "Bosh",
      price: "39.55"
    },
    {
      id: 3,
      name: "Szyba",
      producent: "Audi",
      price: "1249"
    },
    {
      id: 4,
      name: "Klocki hamulcowe",
      producent: "ABCD",
      price: "150"
    }
  ];

  removePart(part: any){
    debugger;
  }
}
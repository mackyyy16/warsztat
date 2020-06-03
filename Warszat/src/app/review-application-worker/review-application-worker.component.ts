import { Component } from '@angular/core';
import { IRepair } from '../shared/models/repair';

@Component({
   templateUrl: './review-application-worker.component.html',
  styleUrls: ['./review-application-worker.component.css']
})
export class ReviewApplicationWorkerComponent {
  applicationsArray = 
  [
    {
      id: 1,
      marka: "Audi",
      model: "A4",
      nrRejestracyjny: "KS XXXXX",
      nrVin: 12334556,
      przebieg: 250000,
      data:
      {
        id: 123,
        dataRozpoczecia: new Date(),
        dataZakoczenia: new Date(),
        status: "Realizacji",
        opis: "Tralala",
        koszt: 1500.20
      }
    },
    {
      id: 2,
      marka: "BMW",
      model: "X4",
      nrRejestracyjny: "KS 11111",
      nrVin: 23424324,
      przebieg: 5345435,
      data:
      {
        id: 125,
        dataRozpoczecia: new Date(),
        dataZakoczenia: new Date(),
        status: "Zakończono",
        opis: "SSSS",
        koszt: 33300.20
      }
    },
    {
      id: 3,
      marka: "Opel",
      model: "Insignia",
      nrRejestracyjny: "KS 00000",
      nrVin: 211111,
      przebieg: 53333,
      data:
      {
        id: 126,
        dataRozpoczecia: new Date(),
        dataZakoczenia: new Date(),
        status: "Przyjęto",
        opis: "V",
        koszt: 334400.20
      }
    }
  ];

  rapairInfo: IRepair;
  show:boolean = false;

  showInfo(app:any){
    debugger;
    this.rapairInfo = app.data;
    this.show = true;
  }

  removeApp(app:any){
    this.applicationsArray = this.applicationsArray
      .filter(item => item.id !== app.id);
  }

  // save(){
  //   this.applicationsArray.forEach(app => {
  //     if(app.data.id === this.rapairInfo.id){
  //       app.data = this.rapairInfo;
  //     }
  //   });
  // }
}
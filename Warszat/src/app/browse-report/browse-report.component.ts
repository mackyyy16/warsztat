import { Component } from '@angular/core';
import { IRepair } from '../shared/models/repair';
import { RepairService } from '../shared/http-services/repairService';

@Component({
   templateUrl: './browse-report.component.html',
  styleUrls: ['./browse-report.component.css']
})
export class BrowseReportComponent {

  repairs: IRepair[] = [];
  raportConfig: string[] = ['dzienny', 'miesięczny', 'roczny'];
  selectedValue: string = '';
  date: string = '';
  showData: boolean = false;
  showRepairs: IRepair[] = [];
  sumOfRepairs: number = 0;

  constructor(private repairService: RepairService){
    this.repairService.getRepairs().subscribe({
      next: repairsFromApi => this.repairs = repairsFromApi,
      error: err => err = err
    });
  }

  show(){
    debugger;
    this.sumOfRepairs = 0;

    if(this.selectedValue === "dzienny"){
      this.showRepairs = this.repairs.filter(q => q.end_date.includes(this.date));
    }else if(this.selectedValue === "miesięczny"){
      let monthly = this.date.split('.').slice(1).join('.');
      this.showRepairs = this.repairs.filter(q => q.end_date.includes(monthly));
    }else{
      let yearly = this.date.split('.').pop();
      this.showRepairs = this.repairs.filter(q => q.end_date.includes(yearly));
    }

    if(this.showRepairs.length !== 0){
      for (let index = 0; index < this.showRepairs.length; index++) {
        let element = this.showRepairs[index];
        this.sumOfRepairs = this.sumOfRepairs + element.price;
        
        this.showData = true;
      }
    }else{
      this.showData = false;
    }
  }
}

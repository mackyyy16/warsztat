import { Component } from '@angular/core';
import { ICar } from '../shared/models/car';
import { CarService } from '../shared/http-services/carService';

@Component({
   templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  public newCar: ICar = {
    id_car: 0,
    mark: "",
    model: "",
    regnumber: "",
    nrvin: null,
    course: null,
    descfault: "",
    id_repair: 0
  }

  public opis: string = "Do zrobienia";
  public cars: ICar[]=[];
  public showMessage: boolean = false;
  public previousCarId = 0;

  constructor(private carService: CarService){
    this.carService.getCars().then(carsFromApi => {
      this.cars=carsFromApi;
    });
  }
  add(){
    debugger;
    
    let val: ICar;
    let err: any;   
        
    let sortedCars = [...this.cars.sort((a, b) => a.id_car - b.id_car).reverse()];
    let newCarId = sortedCars[0].id_car + 1;

    if(this.previousCarId === 0){
      this.previousCarId = newCarId;
      this.newCar.id_car = newCarId;
    }else{
      this.previousCarId = this.previousCarId + 1
      this.newCar.id_car = this.previousCarId;
    }

    this.carService.addCar(this.newCar).subscribe({
      next: usersFromApi => val = usersFromApi,
      error:err => err=err
    });


    this.showMessage = true;
  }
}
import { Component } from '@angular/core';
import { ICar } from '../shared/models/car';
import { CarService } from '../shared/http-services/carService';

@Component({
   templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  public newCar: ICar = {
    id_car: 3,
    mark: "Audi",
    model: "A4",
    regnumber: "KS XXXXX",
    nrvin: 12334556,
    course: 250000,
    descfault: "szyba",
    id_repair: 0
  }

  public opis: string = "Do zrobienia";
  public cars: ICar[]=[];
  public showMessage: boolean = false;

  constructor(private carService: CarService){

  }
  add(){
    debugger;

    let val: ICar;
    let err: any;

    this.carService.getCars().subscribe({
      next:carsFromApi => this.cars=carsFromApi,
      error:err => err=err
    })
    
    if(this.cars.length !== 0){      
      let sortedCars = [...this.cars.sort(q => q.id_car).reverse()];
      let newCarId = sortedCars[0].id_car + 1;

      this.newCar.id_car = newCarId;

      this.carService.addCar(this.newCar).subscribe({
        next: usersFromApi => val = usersFromApi,
        error:err => err=err
      });

      this.showMessage = true;
    }
  }
}
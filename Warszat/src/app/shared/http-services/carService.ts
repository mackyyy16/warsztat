import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { ICar } from '../models/car';
import { IRepair } from '../models/repair';

@Injectable({
   providedIn: 'root'
})
export class CarService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/cars';

    async getCars(): Promise<ICar[]>{
        return this.http.get<ICar[]>(this.url)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    addCar(car: ICar): Observable<ICar>{
        return this.http.post<ICar>(this.url, car)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    async getCarRepair(id_repair: number): Promise<IRepair>{
        return this.http.get<IRepair>(this.url + '/' + id_repair)
            .pipe(
                tap(data => console.log('CarRepair: ' + JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    async removeCar(car: ICar): Promise<ICar>{
        return this.http.delete<ICar>(this.url + '/' + car.id_car)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}

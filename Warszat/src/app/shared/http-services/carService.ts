import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { ICar } from '../models/car';

@Injectable({
   providedIn: 'root'
})
export class CarService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/cars';

    getCars(): Observable<ICar[]>{
        return this.http.get<ICar[]>(this.url)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    addCar(car: ICar): Observable<ICar>{
        return this.http.post<ICar>(this.url, car)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    removeCar(car: ICar): Observable<ICar>{
        return this.http.delete<ICar>(this.url + '/' + car.id_car)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}

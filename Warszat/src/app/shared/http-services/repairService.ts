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
export class RepairService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/cars';

    getRepairs(): Observable<IRepair[]>{
        return this.http.get<IRepair[]>(this.url)
            .pipe(
                tap(data => console.log('Repairs; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    getRepair(id_repair: number): Observable<IRepair>{
        return this.http.get<IRepair>(this.url + '/' + id_repair)
            .pipe(
                tap(data => console.log('Repairs; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    addRepair(car: IRepair): Observable<IRepair>{
        return this.http.post<IRepair>(this.url, car)
            .pipe(
                tap(data => console.log('Repairs; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}
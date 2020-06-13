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
    private url = 'http://localhost:5001/api/repair';

    getRepairs(): Observable<IRepair[]>{
        return this.http.get<IRepair[]>(this.url)
            .pipe(
                tap(data => console.log('Repairs; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    async getRepair(id_repair: number): Promise<IRepair>{
        return this.http.get<IRepair>(this.url + '/' + id_repair)
            .pipe(
                tap(data => console.log('Repairs; '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    addRepair(repair: IRepair): Observable<IRepair>{
        return this.http.post<IRepair>(this.url, repair)
            .pipe(
                tap(data => console.log('Repairs; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    updateRepair(repair: IRepair): Observable<IRepair>{
        return this.http.put<IRepair>(this.url, repair)
            .pipe(
                tap(data => console.log('Update repairs' + JSON.stringify(data))),
                catchError(this.error)
            );
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}

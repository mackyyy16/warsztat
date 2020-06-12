import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { ICar } from '../models/car';
import { IPart } from '../models/part';
import { IRepairPart } from '../models/repair-part';
import { IPartWithAmount } from '../models/part-with-amount';

@Injectable({
   providedIn: 'root'
})
export class RepairPartService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/repairpart';

    getRepairParts(): Observable<IRepairPart[]>{
        return this.http.get<IRepairPart[]>(this.url)
            .pipe(
                tap(data => console.log('PartWithRepairs; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    async getPartPerRepair(id_repair: number): Promise<IPartWithAmount[]>{
        return this.http.get<IPartWithAmount[]>(this.url + '/' + id_repair)
            .pipe(
                tap(data => console.log('PartWithRepairs; '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    async addRepairPart(repairPart: IRepairPart): Promise<IRepairPart>{
        return this.http.post<IRepairPart>(this.url, repairPart)
            .pipe(
                tap(data => console.log('PartWithRepairs: '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}

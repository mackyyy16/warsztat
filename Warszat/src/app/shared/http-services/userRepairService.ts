import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUserRepair } from '../models/user-repair';
import { tap, catchError } from 'rxjs/operators';
import { IRepair } from '../models/repair';
import { IUser } from '../models/user';

@Injectable({ 
    providedIn: 'root'
})
export class UserRepairService{
    constructor(private http: HttpClient){


    }
    private url = 'http://localhost:5001/api/userRepair';

    async getUserRepairs(): Promise<IUserRepair[]>{
        return this.http.get<IUserRepair[]>(this.url)
            .pipe(
                tap(data => console.log('UserRepairs: '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    async getRepairsPerUser(userId: number): Promise<IRepair[]>{
        return this.http.get<IRepair[]>(this.url + '/' + userId)
            .pipe(
                tap(data => console.log('UserRepairs: '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    addUserRepair(userRepair: IUserRepair): Observable<IUserRepair>{
        return this.http.post<IUserRepair>(this.url, userRepair)
            .pipe(
                tap(data => console.log('UserRepairs: '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    async getUserRepair(repair: IRepair): Promise<IUser>{
        return this.http.get<IUser>(this.url + '/user/' + repair.id_repair)
            .pipe(
                tap(data => console.log('UserRepairs '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    updateUserRepair(userRepair: IUserRepair): Observable<IUserRepair>{
        return this.http.put<IUserRepair>(this.url, userRepair)
            .pipe(
                tap(data => console.log('UserRepairs: '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }


    private error(err: HttpErrorResponse){
        return throwError('error');
    }
}
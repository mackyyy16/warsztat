import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { ICar } from '../models/car';
import { IPart } from '../models/part';

@Injectable({
   providedIn: 'root'
})
export class PartService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/parts';

    getParts(): Observable<IPart[]>{
        return this.http.get<IPart[]>(this.url)
            .pipe(
                tap(data => console.log('Parts: '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    addPart(part: IPart): Observable<IPart>{
        return this.http.post<IPart>(this.url, part)
            .pipe(
                tap(data => console.log('Parts: '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}

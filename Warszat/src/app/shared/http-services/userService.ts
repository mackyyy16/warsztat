import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class UserService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/users';

    async getUser(): Promise<IUser[]>{
        return this.http.get<IUser[]>(this.url)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    addUser(user: IUser): Observable<IUser>{
        return this.http.post<IUser>(this.url, user)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    async removeUser(user: IUser): Promise<IUser>{
        return this.http.delete<IUser>(this.url + '/' + user.id_user)
            .pipe(
                tap(data => console.log('Users:' + JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    updateUser(user: IUser): Observable<IUser>{
        return this.http.put<IUser>(this.url, user)
            .pipe(
                tap(data => console.log('allusers; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}

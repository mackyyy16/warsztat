import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from './models/user';

@Injectable({
    providedIn:'root'
})
export class MenuBarService{
    public visibleWorkerComponent: Observable<boolean>;
    public visibleAdminComponent: Observable<boolean>;
    public loggedUser: IUser;
    public isLogged: Observable<boolean>;// = this.visibleAdminComponent || this.visibleWorkerComponent;

    hideWorkerComponent(){
        this.visibleWorkerComponent = of(false);
        this.isLogged = of(false);
    }

    showWorkerComponent(){
        this.visibleWorkerComponent = of(true);
        this.isLogged = of(true);
    }

    hideAdminComponent(){
        this.visibleAdminComponent = of(false);
        this.visibleWorkerComponent = of(false);
        this.isLogged = of(false);
    }

    showAdminComponent(){
        this.visibleAdminComponent = of(true);
        this.visibleWorkerComponent = of(true);
        this.isLogged = of(true);
    }
}
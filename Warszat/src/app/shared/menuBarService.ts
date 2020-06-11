import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class MenuBarService{
    public visibleWorkerComponent: Observable<boolean>;
    public visibleAdminComponent: Observable<boolean>;

    hideWorkerComponent(){
        this.visibleWorkerComponent = of(false);
    }

    showWorkerComponent(){
        this.visibleWorkerComponent = of(true);
    }

    hideAdminComponent(){
        this.visibleAdminComponent = of(false);
        this.visibleWorkerComponent = of(false);
    }

    showAdminComponent(){
        this.visibleAdminComponent = of(true);
        this.visibleWorkerComponent = of(true);
    }
}
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthManagerService {

    constructor() { }

    public isAuthorized(): Observable<boolean> {
        // TODO: UPDATE_ME custom authorization
        return of(true);
    }

    public isAuthenticated(): Observable<boolean> {
        // TODO: UPDATE_ME custom authentication
        return of(true);
    }

}

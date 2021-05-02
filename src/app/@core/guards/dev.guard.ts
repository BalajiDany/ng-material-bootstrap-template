import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DevGuard implements CanActivate, CanLoad {

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.isDevMode();
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean | UrlTree> {
        return this.isDevMode();
    }

    public isDevMode(): Observable<boolean | UrlTree> {
        return of(isDevMode());
    }

}

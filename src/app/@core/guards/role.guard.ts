import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthManagerService } from '../services/auth-manager.service';
import { AuthGuard } from './auth.guard';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanLoad {

    constructor(
        private authManagerService: AuthManagerService,
        private authGuard: AuthGuard,
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.isAuthorized();
    }

    canLoad(route: Route, segments: UrlSegment[])
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.isAuthorized();
    }

    public isAuthorized(): Observable<boolean | UrlTree> {
        return this.authGuard.isAuthenticated()
            .pipe(
                switchMap(isAuthenticated => isAuthenticated === true ? this.authManagerService.isAuthorized() : of(isAuthenticated)),
                map(isAuthorized => isAuthorized === false ? this.router.parseUrl('/error/403') : isAuthorized),
            );
    }

}

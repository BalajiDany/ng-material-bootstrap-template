import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthManagerService } from '../services/auth-manager.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private authManagerService: AuthManagerService,
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.isAuthenticated()
    }

    canLoad(route: Route, segments: UrlSegment[])
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.isAuthenticated();
    }

    public isAuthenticated(): Observable<boolean | UrlTree> {
        return this.authManagerService.isAuthenticated()
            .pipe(
                map(isAuthenticated => isAuthenticated ? true : this.router.parseUrl('/entry/signin')),
            );
    }

}

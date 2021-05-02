import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationManagerService {

    constructor(
        private location: Location,
        private router: Router,
    ) { }

    public back(alternatePath: string = '/') {
        try { this.location.back(); }
        catch (e) { this.router.navigateByUrl(alternatePath); }
    }

    public forward(alternatePath: string = '/') {
        try { this.location.forward() }
        catch (e) { this.router.navigateByUrl(alternatePath); }
    }
}

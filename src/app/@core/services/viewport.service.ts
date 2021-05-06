import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum BREAKPOINT {
    XS = '(min-width: 0)',
    SM = '(min-width: 576px)',
    MD = '(min-width: 768px)',
    LG = '(min-width: 992px)',
    XL = '(min-width: 1200px)',
    XXL = '(min-width: 1400px)',
};

@Injectable({
    providedIn: 'root'
})
export class ViewportService {

    constructor(
        private breakpointObserver: BreakpointObserver,
    ) { }

    // NOTE: Kill the subscription properly.
    public observe(...breakpoint: BREAKPOINT[]): Observable<BREAKPOINT[]> {
        return this.breakpointObserver
            .observe(Object.values(breakpoint))
            .pipe(map(breakpointsState => this.filterBrakpoints(breakpointsState)));
    }

    private filterBrakpoints(breakpointsState: BreakpointState): BREAKPOINT[] {

        if (!breakpointsState || !breakpointsState.matches) return [];

        return Object.entries(breakpointsState.breakpoints)
            .filter(([, state]) => state)
            .map(([breakpoint]) => breakpoint as BREAKPOINT);
    }

}

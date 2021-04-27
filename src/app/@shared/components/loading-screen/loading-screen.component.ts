import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
    selector: 'app-loading-screen',
    templateUrl: './loading-screen.component.html',
    styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit, AfterViewInit {

    // When Content Loads much faster, then flickering of loading page looks not good.
    // So Added some wait time, if content loading time exceed wait time
    // then loading page will removed abruptly.
    // In Milli Second
    private static WAIT_TIME = 500;

    private timeStamp = 0;
    private catchUpTimer: any;
    private _isLoading = true;

    get isLoading() {
        return this._isLoading;
    }

    set isLoading(isLoading: boolean) {
        if (isLoading === this._isLoading) return;

        if (isLoading) {
            this._isLoading = true;
            this.timeStamp = Date.now();
            clearTimeout(this.catchUpTimer);
        } else {
            const dt = Date.now() - this.timeStamp;
            const catchUpTime = Math.max(0, LoadingScreenComponent.WAIT_TIME - dt);
            this.catchUpTimer = setTimeout(() => this._isLoading = false, catchUpTime);
        }
    }

    constructor(
        private router: Router,
    ) {
        this.router.events
            .subscribe((event: Event) => this.navigationInterceptor(event as RouterEvent));
    }
    ngAfterViewInit(): void {
        if (this.isLoading) {
            this.timeStamp = Date.now();
        }
    }

    ngOnInit(): void {
    }

    // Shows and hides the spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {

        if (event instanceof NavigationStart) {
            this.isLoading = true;
        }
        if (event instanceof NavigationEnd
            || event instanceof NavigationError
            || event instanceof NavigationCancel
        ) {
            this.isLoading = false;
        }
    }

}

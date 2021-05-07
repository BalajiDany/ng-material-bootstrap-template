import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoManagerService } from 'src/app/@core/services/seo-manager.service';
import { TranslocoService } from '@ngneat/transloco';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationManagerService } from 'src/app/@core/services/navigation-manager.service';

@Component({
    selector: 'app-access-denied',
    templateUrl: './access-denied.component.html',
    styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit, OnDestroy {

    errorCode = '403';

    private isAlive: Subject<void> = new Subject();

    constructor(
        private translocoService: TranslocoService,
        private seoManagerService: SeoManagerService,
        private navigationManagerService: NavigationManagerService,
    ) {
        this.setPageTitle();
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.isAlive.next();
        this.isAlive.complete();
    }

    backToPreviousPage() {
        this.navigationManagerService.back();
    }

    private setPageTitle(): void {
        this.translocoService.selectTranslate('errorPageTitle', { errorCode: this.errorCode }, { scope: 'errors' })
            .pipe(takeUntil(this.isAlive))
            .subscribe(pageTitle => this.seoManagerService.setTitle(pageTitle));
    }

}

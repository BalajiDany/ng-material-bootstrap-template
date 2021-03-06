import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoManagerService } from 'src/app/@core/services/seo-manager.service';
import { TranslocoService } from '@ngneat/transloco';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-server-error',
    templateUrl: './server-error.component.html',
    styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit, OnDestroy {

    errorCode = '500';

    private isAlive: Subject<void> = new Subject();

    constructor(
        private translocoService: TranslocoService,
        private seoManagerService: SeoManagerService,
    ) {
        this.setPageTitle();
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.isAlive.next();
        this.isAlive.complete();
    }

    private setPageTitle(): void {
        this.translocoService.selectTranslate('errorPageTitle', { errorCode: this.errorCode }, { scope: 'errors' })
            .pipe(takeUntil(this.isAlive))
            .subscribe(pageTitle => this.seoManagerService.setTitle(pageTitle));
    }

}

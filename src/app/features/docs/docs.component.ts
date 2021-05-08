import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TranslocoService } from '@ngneat/transloco';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationManagerService } from 'src/app/@core/services/navigation-manager.service';
import { SeoManagerService } from 'src/app/@core/services/seo-manager.service';
import { ViewportService } from 'src/app/@core/services/viewport.service';

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html',
    styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit, OnDestroy {

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
        this.translocoService.selectTranslate('documentationPageTitle', {}, { scope: 'docs' })
            .pipe(takeUntil(this.isAlive))
            .subscribe(pageTitle => this.seoManagerService.setTitle(pageTitle));
    }

}

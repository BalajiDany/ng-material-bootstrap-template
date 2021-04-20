import { Component, OnInit } from '@angular/core';
import { SeoManagerService } from 'src/app/@core/services/seo-manager.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

    errorCode = '404';

    constructor(
        private translocoService: TranslocoService,
        private seoManagerService: SeoManagerService,
    ) {
        this.setPageTitle();
    }

    ngOnInit(): void {
    }

    private setPageTitle(): void {
        this.translocoService.selectTranslate('errorPageTitle', { errorCode: this.errorCode }, { scope: 'errors' })
            .subscribe(pageTitle => this.seoManagerService.setTitle(pageTitle));
    }

}

import { Component, OnInit } from '@angular/core';
import { SeoManagerService } from 'src/app/@core/services/seo-manager.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-server-down',
    templateUrl: './server-down.component.html',
    styleUrls: ['./server-down.component.scss']
})
export class ServerDownComponent implements OnInit {

    errorCode = '503';

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

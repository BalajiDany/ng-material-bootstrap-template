import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { SeoManagerService } from 'src/app/@core/services/seo-manager.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(
        private translocoService: TranslocoService,
        private seoManagerService: SeoManagerService,
    ) {
        this.setPageTitle();
    }

    ngOnInit(): void {
    }


    private setPageTitle(): void {
        this.translocoService.selectTranslate('signUpLabel', {}, { scope: 'entry' })
            .subscribe(pageTitle => this.seoManagerService.setTitle(pageTitle));
    }
}

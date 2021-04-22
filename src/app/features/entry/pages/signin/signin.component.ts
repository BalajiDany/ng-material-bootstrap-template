import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocaleManagerService } from 'src/app/@core/services/locale-manager.service';
import { SeoManagerService } from 'src/app/@core/services/seo-manager.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


    activeLanguage = '';
    availabelLanguages: any[];

    constructor(
        private localeManager: LocaleManagerService,
        private translocoService: TranslocoService,
        private seoManagerService: SeoManagerService,
    ) {
        this.availabelLanguages = this.localeManager.getSupportedLanguage();
        this.setPageTitle();
        this.setActiveLang();
    }

    ngOnInit(): void {
    }

    changeLanguage(langId: string): void {
        this.localeManager.setActiveLanguage(langId);
        this.setActiveLang();
    }

    private setPageTitle(): void {
        this.translocoService.selectTranslate('signInLabel', {}, { scope: 'entry' })
            .subscribe(pageTitle => this.seoManagerService.setTitle(pageTitle));
    }

    private setActiveLang(): void {
        const activeLangId = this.localeManager.getActiveLanguage();
        const { label } = this.availabelLanguages
            .find((lang: { id: string; }) => lang.id === activeLangId);

        if (!!label) { this.activeLanguage = label; }
    }

}

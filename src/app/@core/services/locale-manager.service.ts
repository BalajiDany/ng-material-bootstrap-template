import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LocaleManagerService {

    public static LOCAL_STORAGE_KEY = 'data-lang';
    public static URL_PARAM_KEY = 'hreflang';

    constructor(
        private route: ActivatedRoute,
        private translocoService: TranslocoService,
        @Inject(DOCUMENT) private document: Document,
    ) {
        this.restoreLanguage();
        this.route.queryParamMap
            .pipe(
                map(paramMap => paramMap.get(LocaleManagerService.URL_PARAM_KEY)),
                filter(lang => this.isSupportedLanguage(lang)),
            ).subscribe(lang => this.setActiveLanguage(`${lang}`));
    }

    public getSupportedLanguage(): any {
        return this.translocoService.getAvailableLangs();
    }

    public getActiveLanguage(): string {
        return this.translocoService.getActiveLang();
    }

    public setActiveLanguage(lang: string): void {
        const isSupported = this.isSupportedLanguage(lang);

        if (!isSupported) {
            // TODO: UPDATE_ME (Good to show some error)
            console.warn(`Language not supported : ${lang}`);
            return;
        }
        if (this.getActiveLanguage() === lang) {
            return;
        }

        this.changeLanguage(lang);
    }

    private isSupportedLanguage(lang: string | null): boolean {
        if (!lang) return false;

        const supportedLanguage: [] = this.getSupportedLanguage();
        return !!supportedLanguage
            .find(({ id }) => id === lang);
    }

    private changeLanguage(lang: string): void {
        this.persistLang(lang);
        this.reflectLang(lang);
    }

    private persistLang(lang: string): void {
        localStorage.setItem(LocaleManagerService.LOCAL_STORAGE_KEY, lang);
    }

    private reflectLang(lang: string): void {
        this.document.documentElement.lang = lang;
        this.translocoService.setActiveLang(lang);
    }

    private restoreLanguage(): void {
        const lang = localStorage.getItem(LocaleManagerService.LOCAL_STORAGE_KEY);
        const isSupported = this.isSupportedLanguage(lang);
        if (isSupported) this.reflectLang(`${lang}`);
    }

}

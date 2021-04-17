import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
    providedIn: 'root'
})
export class SeoManagerService {

    private appName: string = '';
    private appDescription: string = '';

    constructor(
        private meta: Meta,
        private title: Title,
        private translocoService: TranslocoService,
    ) {
        this.translocoService
            // TODO: UPDATE_ME (change the value in 'asserts/i18n/&.json')
            .selectTranslate(['appName', 'appDescription'])
            .subscribe(
                ([appName, appDescription]) => {
                    this.appName = appName;
                    this.appDescription = appDescription;
                    this.reflectTitle(this.appName);
                    this.reflectDescrition(this.appDescription);
                }
            );
    }

    public setTitle(page: string): void {
        if (!!page) this.reflectTitle(this.appName);
        else this.reflectTitle(`${page} | ${this.appName}`);
    }

    public setDescription(content: string): void {
        this.reflectDescrition(content);
    }

    private reflectTitle(page: string): void {
        this.title.setTitle(page);
    }

    private reflectDescrition(content: string): void {
        this.meta.updateTag({ name: 'description', content });
    }

}

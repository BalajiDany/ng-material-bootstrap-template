import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocaleManagerService } from 'src/app/@core/services/locale-manager.service';
import { EntryComponent } from '../../entry.component';

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
    ) {
        this.availabelLanguages = this.localeManager.getSupportedLanguage();
        this.setActiveLang();
    }

    ngOnInit(): void {
    }

    changeLanguage(langId: string): void {
        this.localeManager.setActiveLanguage(langId);
        this.setActiveLang();
    }

    private setActiveLang(): void {
        const activeLangId = this.localeManager.getActiveLanguage();
        const { label } = this.availabelLanguages
            .find((lang: { id: string; }) => lang.id === activeLangId);

        if (!!label) { this.activeLanguage = label; }
    }

}

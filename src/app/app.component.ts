import { Component } from '@angular/core';
import { LocaleManagerService } from './@core/services/locale-manager.service';
import { SeoManagerService } from './@core/services/seo-manager.service';
import { ThemeManagerService } from './@core/services/theme-manager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private localeManagerService: LocaleManagerService,
        private themeManagerService: ThemeManagerService,
        private seoManagerService: SeoManagerService,
    ) { }

}

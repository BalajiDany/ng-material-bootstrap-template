import { Component } from '@angular/core';
import { LocaleManagerService } from './@core/services/locale-manager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private localeManagerService: LocaleManagerService,
    ) { }

}

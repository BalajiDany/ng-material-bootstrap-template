import { NgModule } from '@angular/core';
import { TRANSLOCO_LOADER, TRANSLOCO_CONFIG, translocoConfig, TranslocoModule } from '@ngneat/transloco';
import { environment } from 'src/environments/environment';
import { TranslocoHttpLoaderService } from './transloco-http-loader.service';

const availableLangs = [
    { id: 'en', label: 'English' },
    { id: 'es', label: 'Español' },
]

@NgModule({
    exports: [
        TranslocoModule,
    ],
    providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs,
                defaultLang: 'en',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: environment.production,
            })
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoaderService }
    ]
})
export class TranslocoRootModule { }

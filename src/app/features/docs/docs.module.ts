import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

@NgModule({
    declarations: [
        DocsComponent,
        TypographyComponent
    ],
    imports: [
        CommonModule,
        TranslocoModule,
        DocsRoutingModule
    ],
    providers: [
        { provide: TRANSLOCO_SCOPE, useValue: 'docs' }
    ]
})
export class DocsModule { }

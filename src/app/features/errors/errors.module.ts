import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';

import { ErrorsComponent } from './errors.component';
import { ErrorsRoutingModule } from './errors-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { ServerDownComponent } from './pages/server-down/server-down.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';

@NgModule({
    declarations: [
        ErrorsComponent,
        PageNotFoundComponent,
        AccessDeniedComponent,
        ServerDownComponent,
        ServerErrorComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        TranslocoModule,
        ErrorsRoutingModule
    ],
    providers: [
        { provide: TRANSLOCO_SCOPE, useValue: 'errors' }
    ]
})
export class ErrorsModule { }

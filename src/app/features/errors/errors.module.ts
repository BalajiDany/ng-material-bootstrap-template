import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { ServerDownComponent } from './pages/server-down/server-down.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        AccessDeniedComponent,
        ServerDownComponent,
        ServerErrorComponent,
    ],
    imports: [
        CommonModule,
        ErrorsRoutingModule
    ]
})
export class ErrorsModule { }

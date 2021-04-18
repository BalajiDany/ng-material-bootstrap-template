import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
    declarations: [
        EntryComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        TranslocoModule,
        EntryRoutingModule
    ],
    providers: [
        { provide: TRANSLOCO_SCOPE, useValue: 'entry' }
    ]
})
export class EntryModule { }

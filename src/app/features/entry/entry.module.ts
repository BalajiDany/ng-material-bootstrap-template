import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
    declarations: [
        EntryComponent,
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        TranslocoModule,
        EntryRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
    ],
    providers: [
        { provide: TRANSLOCO_SCOPE, useValue: 'entry' }
    ]
})
export class EntryModule { }

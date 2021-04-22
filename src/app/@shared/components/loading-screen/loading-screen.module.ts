import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingScreenComponent } from './loading-screen.component';

@NgModule({
    declarations: [
        LoadingScreenComponent,
    ],
    imports: [
        CommonModule,
        MatProgressBarModule,
    ],
    exports: [
        LoadingScreenComponent,
    ]
})
export class LoadingScreenModule { }

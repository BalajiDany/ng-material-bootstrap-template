import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from './@core/transloco/transloco-root.module';
import { LoadingScreenModule } from './@shared/components/loading-screen/loading-screen.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Base Modules
        BrowserModule,
        LayoutModule,
        HttpClientModule,
        BrowserAnimationsModule,

        // App Specific Modules
        AppRoutingModule,
        TranslocoRootModule,
        LoadingScreenModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

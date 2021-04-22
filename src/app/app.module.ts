import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslocoRootModule,
        LoadingScreenModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { ServerDownComponent } from './pages/server-down/server-down.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '403',
        pathMatch: 'full',
        component: AccessDeniedComponent,
    },
    {
        path: '500',
        pathMatch: 'full',
        component: ServerErrorComponent,
    },
    {
        path: '503',
        pathMatch: 'full',
        component: ServerDownComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorsRoutingModule { }

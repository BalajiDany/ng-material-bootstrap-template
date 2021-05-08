import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/guards/auth.guard';

const routes: Routes = [
    // TODO: UPDATE_ME Change this to default home path
    // Since Home page is not developed, redirecting to Sign In page.
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'entry/signin',
    },
    {
        path: 'docs',
        loadChildren: () => import('./features/docs/docs.module')
            .then(module => module.DocsModule),
    },
    {
        path: 'entry',
        loadChildren: () => import('./features/entry/entry.module')
            .then(module => module.EntryModule),
    },
    {
        path: 'error',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () => import('./features/errors/errors.module')
            .then(module => module.ErrorsModule),
    },
    {
        path: '**',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () => import('./features/errors/errors.module')
            .then(module => module.ErrorsModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

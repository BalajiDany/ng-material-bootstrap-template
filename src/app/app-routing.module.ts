import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // TODO: UPDATE_ME Change this to default home path
    // Since Home page is not developed, redirecting to Sign In page.
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'entry/signin',
    },
    {
        path: 'entry',
        loadChildren: () => import('./features/entry/entry.module')
            .then(module => module.EntryModule),
    },
    {
        path: 'error',
        loadChildren: () => import('./features/errors/errors.module')
            .then(module => module.ErrorsModule),
    },
    {
        path: '**',
        loadChildren: () => import('./features/errors/errors.module')
            .then(module => module.ErrorsModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

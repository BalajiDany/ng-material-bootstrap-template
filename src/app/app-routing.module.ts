import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

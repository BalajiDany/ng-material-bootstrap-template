import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

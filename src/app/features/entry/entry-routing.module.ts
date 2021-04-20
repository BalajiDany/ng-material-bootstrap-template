import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
    {
        matcher: () => ({ consumed: [] }),
        component: EntryComponent,
        children: [
            {
                path: 'signin',
                pathMatch: 'full',
                component: SigninComponent,
            },
            {
                path: 'signup',
                pathMatch: 'full',
                component: SignupComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntryRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {
        matcher: () => ({ consumed: [] }),
        component: EntryComponent,
        children: [
            {
                path: 'login',
                pathMatch: 'full',
                component: LoginComponent,
            },
            {
                path: 'register',
                pathMatch: 'full',
                component: RegisterComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntryRoutingModule { }

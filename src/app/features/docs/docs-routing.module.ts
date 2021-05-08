import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs.component';
import { TypographyComponent } from './pages/typography/typography.component';

const routes: Routes = [
    {
        path: '',
        component: DocsComponent,
        children: [
            {
                path: 'typography',
                pathMatch: 'full',
                component: TypographyComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocsRoutingModule { }

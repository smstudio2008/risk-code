import { Route } from '@angular/router';
import { CompanyDetailsComponent } from '../page/company-details.component';

export const companyDetailsRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
    },
    {
        path: 'details/:id',
        component: CompanyDetailsComponent,
    },
    {
        path: '**',
        redirectTo: 'details',
    },
];


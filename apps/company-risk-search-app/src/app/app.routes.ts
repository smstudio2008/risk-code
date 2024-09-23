import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@company/risk').then((module) => module.CompanySearchRiskModule),
    },
    { path: '**', redirectTo: '' },
];;

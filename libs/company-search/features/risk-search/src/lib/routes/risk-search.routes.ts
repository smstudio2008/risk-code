import { Route } from '@angular/router';
import { RiskSearchComponent } from '../pages/search/risk-search.component';
import { RiskSearchResultComponent } from '../pages/search-results/risk-search-result.component';
import { RiskSearchHomeComponent } from '../pages/home/risk-search-home.component';
import { AuthGuard } from '../guards/auth.guard';

export const riskRoutes: Route[] = [
    {
        path: '',
        component: RiskSearchHomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full',
            },
            {
                path: 'search',
                component: RiskSearchComponent,
            },
            {
                path: 'search-results',
                component: RiskSearchResultComponent,
            },
            {
                path: 'company',
                loadChildren: () =>
                    import('@company/company-detail').then(
                        (module) => module.CompanySearchDetailsModule
                    ),
                    canActivate: [AuthGuard], 
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'search',
    },
];


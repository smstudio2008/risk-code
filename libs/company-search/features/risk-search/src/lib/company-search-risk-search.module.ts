import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { riskRoutes } from './routes/risk-search.routes';
import { RiskSearchHomeComponent } from './pages/home/risk-search-home.component';

import {
  ButtonComponent,
  CardComponent,
  HeaderComponent,
  InputComponent,
} from '@company/ui-lib';

import { RiskSearchResultComponent } from './pages/search-results/risk-search-result.component';
import { RiskSearchComponent } from './pages/search/risk-search.component';

import { CompanyFacade } from '@company/domain';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(riskRoutes),
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
  ],
  declarations: [
    RiskSearchHomeComponent,
    RiskSearchResultComponent,
    RiskSearchComponent,
  ],
  providers: [CompanyFacade],
})
export class CompanySearchRiskModule { }

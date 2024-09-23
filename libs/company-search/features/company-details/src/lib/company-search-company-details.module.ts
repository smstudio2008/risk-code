import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { companyDetailsRoutes } from './routes/company-details.routes';
import { CompanyDetailsComponent } from './page/company-details.component';

import { ButtonComponent, ListComponent } from '@company/ui-lib';
import { CompanyFacade } from '@company/domain';


@NgModule({
  imports: [CommonModule, NgFor, RouterModule.forChild(companyDetailsRoutes), ListComponent, ButtonComponent],
  declarations: [CompanyDetailsComponent],
  providers: [CompanyFacade],
})
export class CompanySearchDetailsModule { }

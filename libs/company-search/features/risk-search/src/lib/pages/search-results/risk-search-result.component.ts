import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Router } from '@angular/router';
import { CompanyFacade, ICompanies } from '@company/domain';

import { Observable } from 'rxjs';

@Component({
  selector: 'company-risk-risk-search-result',
  templateUrl: './risk-search-result.component.html',
  styleUrl: './risk-search-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RiskSearchResultComponent {

  private readonly _router: Router = inject(Router);
  private readonly _companyFacade: CompanyFacade = inject(CompanyFacade);

  public companies$: Observable<ICompanies | null> = this._companyFacade.companies$;

  public openDetails(companyNumber: string): void {
    this._companyFacade.getSelectedCompany(companyNumber);

    this._router.navigate([`company/details/${companyNumber}`]);
  }
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyFacade } from '@company/domain';


@Component({
  selector: 'company-risk-risk-search',
  templateUrl: './risk-search.component.html',
  styleUrl: './risk-search.component.scss',
})
export class RiskSearchComponent {
  private readonly _router: Router = inject(Router);
  private readonly _companyFacade: CompanyFacade = inject(CompanyFacade);

  public openResults(dataQuery: string | undefined): void {
    if (dataQuery) {
      this._companyFacade.searchCompanies(dataQuery);

      this._router.navigate(['search-results'], {
        queryParams: { query: dataQuery },
      });
    }
  }
}

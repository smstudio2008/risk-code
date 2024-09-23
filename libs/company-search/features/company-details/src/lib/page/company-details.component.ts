import { Component, inject, OnDestroy } from '@angular/core';
import { CompanyFacade, IOfficers, Item } from '@company/domain';

import { Observable } from 'rxjs';

@Component({
  selector: 'company-details-company-details',
  templateUrl: './company-details.component.html',
  styles: `:host{
    margin: 5% auto;
    }`,
})
export class CompanyDetailsComponent implements OnDestroy {
  private readonly _companyFacade: CompanyFacade = inject(CompanyFacade);
  
  public selectedCompany$: Observable<Item | null> = this._companyFacade.selectedCompany$;
  public officers$: Observable<IOfficers | null> = this._companyFacade.officers$;

  public getOfficers(companyNumber: string): void {
    this._companyFacade.getCompanyOfficers(companyNumber);
  }

  public ngOnDestroy(): void {
    this._companyFacade.clearOfficersFromStore()
  }
}

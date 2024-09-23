import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  searchCompanies,
  searchCompaniesSuccess,
  searchCompaniesFailure,
  getCompanyOfficers,
  getCompanyOfficersSuccess,
  getCompanyOfficersFailure,
} from '../actions/company-search.action';
import { RiskService } from '../../../infrastructure/services/risk-service/risk.data.service';
import { ICompanies } from '../../../entities/companies';
import { IOfficers } from '../../../entities/officers';

@Injectable()
export class CompanyEffects {
  public readonly actions$: Actions = inject(Actions);

  private readonly _riskService: RiskService = inject(RiskService);

  public searchCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCompanies),
      mergeMap(({ query }) =>
        this._riskService.searchCompanies(query).pipe(
          map((companies: ICompanies) =>
            searchCompaniesSuccess({ companies })
          ),
          catchError((error) => of(searchCompaniesFailure({ error })))
        )
      )
    )
  );

  public getCompanyOfficers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCompanyOfficers),
      mergeMap(({ companyNumber }) =>
        this._riskService.getCompanyOfficers(companyNumber).pipe(
          map((officers: IOfficers) =>
            getCompanyOfficersSuccess({ officers })
          ),
          catchError((error) => of(getCompanyOfficersFailure({ error })))
        )
      )
    )
  );
}

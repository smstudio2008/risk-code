import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    searchCompanies,
    getCompanyOfficers,
    loadCompany,
    clearOfficers,
} from '../+state/company-search/actions/company-search.action';
import { CompanyState } from '../+state/company-search/reducer/company.reducer';
import {
    selectCompanies,
    selectOfficers,
    selectLoading,
    selectError,
    selectSelectedCompany,
} from '../+state/company-search/selectors/company.selectors';
import { ICompanies, Item } from '../entities/companies';
import { IOfficers } from '../entities/officers';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CompanyFacade {
    public readonly store: Store<CompanyState> = inject(Store);

    public companies$: Observable<ICompanies | null> = this.store.select(selectCompanies);
    public selectedCompany$: Observable<Item | null> = this.store.select(selectSelectedCompany);
    public officers$: Observable<IOfficers | null> = this.store.select(selectOfficers);
    public loading$: Observable<boolean> = this.store.select(selectLoading);
    public error$: Observable<HttpErrorResponse | null> = this.store.select(selectError);

    // Methods to dispatch actions
    public searchCompanies(query: string): void {
        this.store.dispatch(searchCompanies({ query }));
    }

    public getSelectedCompany(companyNumber: string): void {
        this.store.dispatch(loadCompany({ companyNumber }));
    }

    public getCompanyOfficers(companyNumber: string): void {
        this.store.dispatch(getCompanyOfficers({ companyNumber }));
    }

    public clearOfficersFromStore(): void {
        this.store.dispatch(clearOfficers());
    }
}

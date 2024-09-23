import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CompanyState } from '../reducer/company.reducer';

export const selectCompanyState = createFeatureSelector<CompanyState>('company');

export const selectCompanies = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.companies
);

export const selectSelectedCompany = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.selectedCompany
);


export const selectLoading = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.loading
);

export const selectError = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.error
);


export const selectOfficers = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.officers
);

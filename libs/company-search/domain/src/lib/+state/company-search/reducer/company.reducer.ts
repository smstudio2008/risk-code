import { createReducer, on } from '@ngrx/store';
import {
  searchCompanies,
  getCompanyOfficers,
  searchCompaniesSuccess,
  searchCompaniesFailure,
  getCompanyOfficersFailure,
  getCompanyOfficersSuccess,
  loadCompany,
  clearOfficers,
} from '../actions/company-search.action';
import { ICompanies, Item } from '../../../entities/companies';
import { IOfficers } from '../../../entities/officers';
import { HttpErrorResponse } from '@angular/common/http';

export interface CompanyState {
  companies: ICompanies | null;
  officers: IOfficers |null,
  loading: boolean;
  error: HttpErrorResponse|null;
  selectedCompany: Item | null;
}
export const COMPANY_SEARCH_FEATURE_KEY = 'company';

export const initialState: CompanyState = {
  companies: null,
  officers: null,
  loading: false,
  error: null,
  selectedCompany: null,
};

export const companyReducer = createReducer(
  initialState,
  on(searchCompanies, getCompanyOfficers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(searchCompaniesSuccess, (state, { companies }) => ({
    ...state,
    loading: false,
    companies,
  })),
  on(searchCompaniesFailure, getCompanyOfficersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(getCompanyOfficersSuccess, (state, { officers }) => ({
    ...state,
    loading: false,
    officers,
  })),
  on(loadCompany, (state, { companyNumber }) => ({
    ...state,
    selectedCompany: state?.companies?.items.find((company:Item) => company?.company_number === companyNumber) || null
  })),
  on(clearOfficers, (state) => ({
    ...state,
    officers: null
  })),
);

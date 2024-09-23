import { createAction, props } from '@ngrx/store';
import { ICompanies } from '../../../entities/companies';
import { IOfficers } from '../../../entities/officers';
import { HttpErrorResponse } from '@angular/common/http';

// Search for companies
export const searchCompanies = createAction('[Company] Search Companies', props<{ query: string }>());
export const searchCompaniesSuccess = createAction('[Company] Search Companies Success', props<{ companies:  ICompanies  }>());
export const searchCompaniesFailure = createAction('[Company] Search Companies Failure', props<{ error: HttpErrorResponse }>());

// Get company officers
export const getCompanyOfficers = createAction('[Company] Get Company Officers', props<{ companyNumber: string }>());
export const getCompanyOfficersSuccess = createAction('[Company] Get Company Officers Success', props<{ officers: IOfficers  }>());
export const getCompanyOfficersFailure = createAction('[Company] Get Company Officers Failure', props<{ error: HttpErrorResponse }>());

export const loadCompany = createAction('[Company] Load Company', props<{ companyNumber: string }>());
export const clearOfficers = createAction('[Company] Clear Officers');
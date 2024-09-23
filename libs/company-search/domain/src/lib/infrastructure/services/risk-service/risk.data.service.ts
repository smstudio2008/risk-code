import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICompanies } from '../../../entities/companies';
import { IOfficers } from '../../../entities/officers';

import { environment } from '@company/environment';


@Injectable({
    providedIn: 'root',
})
export class RiskService {
    private readonly apiUrl = `${environment.corsProxy}${environment.apiUrl}`;
    private readonly apiKey = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf';

    constructor(private readonly http: HttpClient) { }

    // Public method to search for companies by name or number
    public searchCompanies(query: string): Observable<ICompanies> {
        const headers = new HttpHeaders().set('x-api-key', this.apiKey);

        const params = new HttpParams()
            .set('Query', query)

        return this.http.get<ICompanies>(`${this.apiUrl}/Search`, { headers, params });
    }

    // Public method to get company officers by company number
    public getCompanyOfficers(companyNumber: string): Observable<IOfficers> {
        const url = `${this.apiUrl}/Officers?CompanyNumber=${companyNumber}`;
        const headers = new HttpHeaders().set('x-api-key', this.apiKey);

        return this.http.get<IOfficers>(url, { headers });
    }
}

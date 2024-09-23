import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ICompanies } from '../../../entities/companies';
import { IOfficers } from '../../../entities/officers';
import { RiskService } from './risk.data.service';

import { environment } from '@company/environment';

describe('RiskService', () => {
    let service: RiskService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RiskService],
        });

        service = TestBed.inject(RiskService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('searchCompanies', () => {
        it('should call the correct API endpoint and return a list of companies', () => {
            const mockCompanies: ICompanies = {
                page_number: 1,
                kind: 'search#companies',
                total_results: 1,
                items: [
                    {
                        company_status: 'active',
                        address_snippet: '123 Test St, Test City, TC 12345',
                        date_of_creation: '2020-01-01',
                        matches: { title: [1, 3] },
                        description: '12345678 - Incorporated on 01 January 2020',
                        links: { self: '/company/12345678' },
                        company_number: '12345678',
                        title: 'Test Company Ltd',
                        company_type: 'ltd',
                        address: {
                            premises: '123',
                            postal_code: 'TC 12345',
                            locality: 'Test City',
                            address_line_1: 'Test St',
                        },
                        kind: 'searchresults#company',
                        description_identifier: 'incorporated-on',
                    },
                ],
            };

            const query = '223';
            service.searchCompanies(query).subscribe((companies) => {
                expect(companies).toEqual(mockCompanies);
            });

            const req = httpMock.expectOne(`${environment.corsProxy}${environment.apiUrl}/Search?Query=${query}`);
            expect(req.request.method).toBe('GET');
            req.flush(mockCompanies); 
        });
    });

    describe('getCompanyOfficers', () => {
        it('should call the correct API endpoint and return a list of officers', () => {
            const mockOfficers: IOfficers = {
                etag: "10a2c0848ac6d94a7e0d5bc00043ab43c704fd70",
                active_count: 2,
                links: {
                    self: "/company/05720023/officers",
                },
                kind: "officer-list",
                items_per_page: 35,
                items: [
                    {
                        address: {
                            postal_code: "OL12 0SF",
                            locality: "Rochdale",
                            region: "Lancashire",
                            address_line_1: "354-358 Whitworth Road",
                        },
                        name: "QURESHI, Neem",
                        appointed_on: "2006-03-20",
                        officer_role: "secretary",
                        links: {
                            officer: {
                                appointments: "/officers/q3PbKLwJ4H4nxetmI-7BUQ8tCyQ/appointments",
                            },
                        },
                        nationality: "British",
                    },
                    {
                        address: {
                            postal_code: "OL12 0SF",
                            locality: "Rochdale",
                            region: "Lancashire",
                            address_line_1: "354-358 Whitworth Road",
                        },
                        name: "QURESHI, Yes",
                        appointed_on: "2006-03-20",
                        officer_role: "director",
                        links: {
                            officer: {
                                appointments: "/officers/GloThl8YdFUuMljrl3cIY2_Swog/appointments",
                            },
                        },
                        date_of_birth: {
                            month: 9,
                            year: 1968,
                        },
                        occupation: "Sales Manager",
                        country_of_residence: "United Kingdom",
                        nationality: "British"
                    }
                ],
                total_results: 4,
                resigned_count: 2,
            };

            const companyNumber = '12345678';
            service.getCompanyOfficers(companyNumber).subscribe((officers) => {
                expect(officers).toEqual(mockOfficers);
            });

            const req = httpMock.expectOne(`${environment.corsProxy}${environment.apiUrl}/Officers?CompanyNumber=${companyNumber}`);
            expect(req.request.method).toBe('GET');

            req.flush(mockOfficers);
        });
    });
});

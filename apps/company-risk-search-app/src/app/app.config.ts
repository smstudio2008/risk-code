import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './+store';
import { provideRouterStore } from '@ngrx/router-store';
import { CompanyEffects, companyReducer } from '@company/domain';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(
      { ...reducers, company: companyReducer },
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    provideEffects([CompanyEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: true }),
    provideRouterStore(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};

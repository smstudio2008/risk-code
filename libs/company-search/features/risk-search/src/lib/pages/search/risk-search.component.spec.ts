import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiskSearchComponent } from './risk-search.component';
import { CompanySearchRiskModule } from '../../company-search-risk-search.module';
import { CompanyFacade } from '@company/domain';
import { provideMockStore } from '@ngrx/store/testing';

describe('RiskSearchComponent', () => {
  let component: RiskSearchComponent;
  let fixture: ComponentFixture<RiskSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySearchRiskModule],
      providers: [
        provideMockStore({}), // Provide a mock store
        CompanyFacade, // Provide the facade if it's being used
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RiskSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

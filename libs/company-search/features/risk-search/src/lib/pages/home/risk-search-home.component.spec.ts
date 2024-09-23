import { CompanySearchRiskModule } from './../../company-search-risk-search.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiskSearchHomeComponent } from './risk-search-home.component';

describe('RiskSearchHomeComponent', () => {
  let component: RiskSearchHomeComponent;
  let fixture: ComponentFixture<RiskSearchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskSearchHomeComponent],
      imports:[CompanySearchRiskModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RiskSearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

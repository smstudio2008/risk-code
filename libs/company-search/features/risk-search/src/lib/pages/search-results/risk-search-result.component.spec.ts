import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiskSearchResultComponent } from './risk-search-result.component';
import { CompanyFacade } from '@company/domain';
import { provideMockStore } from '@ngrx/store/testing';


describe('RiskSearchResultComponent', () => {
  let component: RiskSearchResultComponent;
  let fixture: ComponentFixture<RiskSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore({}), // Provide a mock store
        CompanyFacade, // Provide the facade if it's being used
      ],
      declarations: [RiskSearchResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RiskSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

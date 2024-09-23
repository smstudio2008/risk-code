import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailsComponent } from './company-details.component';
import { CompanySearchDetailsModule } from '../company-search-company-details.module';
import { provideMockStore } from '@ngrx/store/testing';
import { CompanyFacade } from '@company/domain';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySearchDetailsModule],
      providers: [
        provideMockStore({}), // Provide a mock store
        CompanyFacade, // Provide the facade if it's being used
      ],
    }).compileComponents();


    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

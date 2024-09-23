import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'company-risk-risk-search-home',
  templateUrl: './risk-search-home.component.html',
  styleUrl: './risk-search-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RiskSearchHomeComponent implements OnInit {
  public buttonTitle = 'Sign In';

  public ngOnInit(): void {
    this.updateButtonTitle();
  }

  public handleSignInClick(): void {
    const token = sessionStorage.getItem('userToken');

    if (token) {
      alert('You are already logged in.');
    } else {
      alert('You are not logged in. Please log in.');

      sessionStorage.setItem('userToken', 'example-token');
      this.updateButtonTitle();
    }
  }

  private updateButtonTitle(): void {
    const token = sessionStorage.getItem('userToken');
    
    if (token) {
      this.buttonTitle = 'Sign Out';
    } else {
      this.buttonTitle = 'Sign In';
    }
  }
}

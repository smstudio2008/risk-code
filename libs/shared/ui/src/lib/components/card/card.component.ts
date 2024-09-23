import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'company-ui-lib-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="card">
                <ng-content></ng-content>
            </div> `,
  styles: `.card {
              background-color: var(--text-color-light);
              border: 1px solid transparent;
              border-radius: var(--border-radius);
              box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
              padding: 1rem;
              transition: border-color 0.3s ease, box-shadow 0.3s ease;
            
              &:hover {
                border-color: var(--primary-color);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                cursor: pointer;
              }
            }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}

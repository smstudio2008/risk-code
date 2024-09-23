import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'company-ui-lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public size: 'small' | 'medium' | 'large' = 'medium';
  @Input() public type: 'primary' | 'link' = 'primary';
  @Input() disabled = false;

  public get buttonClasses(): string[] {
    return [`btn-${this.size}`, `btn-${this.type}`];
  }
}

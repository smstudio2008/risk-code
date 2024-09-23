import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DetailItem {
  label: string;
  value: string;
}

@Component({
  selector: 'company-ui-lib-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() public title = '';
  @Input() public details: DetailItem[] = [];
}

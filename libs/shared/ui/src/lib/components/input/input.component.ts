import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: 'company-ui-lib-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() public placeholder = 'Search...';
  @Input() public value = '';

  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;  
    this.value = input.value;
  }
}

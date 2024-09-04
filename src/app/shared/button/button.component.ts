import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() className: string = '';
  @Input() type: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<void>();
}

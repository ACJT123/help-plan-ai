import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() href: string = '';
  @Input() target: string = '_self';
  @Input() text: string = '';
  @Input() wrapperClass = '';
  @Input() linkClass = '';
}

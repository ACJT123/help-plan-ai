import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() href: string = '';
  @Input() target: string = '_self';
  @Input() text: string = '';
  @Input() className = '';

  constructor(private _router: Router) {}

  link() {
    this._router.navigate([this.href]);
  }
}

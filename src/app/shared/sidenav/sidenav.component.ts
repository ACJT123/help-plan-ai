import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],  // Corrected styleUrls to plural
})
export class SidenavComponent {
  events: string[] = [];
  opened: boolean = false;
}

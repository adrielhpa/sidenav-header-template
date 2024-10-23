import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap-sidenav';

  sideNavItems = [
    {
      name: 'Dashboard',
      icon: 'bi bi-house',
      route: 'dashboard'
    },
    {
      name: 'Configuration',
      icon: 'bi bi-gear',
      route: 'config'
    }
  ];

  headerItems = [
    {
      name: 'Home',
      route: '/'
    }
  ]
}

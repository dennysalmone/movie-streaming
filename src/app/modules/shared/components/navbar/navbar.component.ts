import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public toolbar: boolean = false;

  constructor(private auth: AuthService) { }

  logout(): void {
    this.auth.logout();
  }

  checkAuth(): boolean {
    return this.auth.isAuthenticated();
  }

  toolbarToggle(): void {
    this.toolbar = !this.toolbar
  }

}

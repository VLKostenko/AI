import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';

// Services
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {

  constructor(
		private router: Router,
		private authService: AuthenticationService
		) {}

	public canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return !this.authService.isLoggedIn();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

// Animations
import { fade } from '../../services/animations/animation';

@Component({
  selector: 'ai-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fade]

})
export class HeaderComponent implements OnInit {

  public emailLoggedUser: string;
  public nameLoggedUser: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    ) { }


  // Logout user
  public onLogout(): void {
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['login']);
        }
    });
  }


  ngOnInit(): void {
    // Get user data from localStore
    this.emailLoggedUser = this.authService.getEmailToken();
    this.nameLoggedUser = this.authService.getNameToken();
  }

}

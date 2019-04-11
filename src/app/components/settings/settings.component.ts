import { Component, OnInit } from '@angular/core';

// Services
import { AuthenticationService } from '../../services/authentication.service';

// Animations
import { fade } from '../../services/animations/animation';

interface Admin {
  name: string;
  status: string;
  joined: number;
  login: number;
  upload: number;
  sales: number;
  pending: number;
}

const ADMIN: Admin[] = [
  {
    name: 'Evan Larson',
    status: 'Admin',
    joined: 12,
    login: 23,
    upload: 25,
    sales: 50,
    pending: 3000,
  }
];

@Component({
  selector: 'ai-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [fade]
})
export class SettingsComponent implements OnInit {

  public admin = ADMIN;
  public emailLoggedUser: string;
  public nameLoggedUser: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    // Get user data from localStore
    this.emailLoggedUser = this.authService.getEmailToken();
    this.nameLoggedUser = this.authService.getNameToken();
  }

}

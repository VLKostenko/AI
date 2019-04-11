import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Service
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

// Models
import LoginModel from './login.model';
import LoginForm from './login.form';

// Animations
import { fade } from '../../services/animations/animation';

@Component({
  selector: 'ai-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fade]
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: LoginForm;
  private model: LoginModel;
  public isFormErrorMessage: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService,
    ) {
      this.model = new LoginModel();
      this.form = new LoginForm(this.model);
    }

  // start form validation (to show what is wrong)
  private invalidForm(): void {
    this.form.validate();
    this.isFormErrorMessage = true;
  }

  // start login request
	public onLogin(form): void {
    // console.log(form.value);
    this.authService.login(form.value)
      .subscribe(
        success => {
          if (success) {
            // this.alertService.success('Registration successful!', true);
            this.router.navigate(['/home']);
          }
        },
        error => {
          this.alertService.error(error);
        }
      );
	}

  // make subscribe on a component initialization
  public ngOnInit(): void {}

  // make unsubscribe before destroying component
  public ngOnDestroy(): void {}

}

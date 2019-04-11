import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Service
// import { DataService } from './../../services/data.service';
import { UserService } from './../../services/user.service';
import { AlertService } from './../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

// Form Models
import RegistrationModel from './registration.model';
import RegistrationForm from './registration.form';

// Animations
import { fade } from '../../services/animations/animation';

@Component({
  selector: 'ai-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [fade]
})
export class RegistrationComponent implements OnInit, OnDestroy {

  public form: RegistrationForm;
  private model: RegistrationModel;
  public formErrorMessage: boolean = false;

  constructor(
    private router: Router,
    private userData: UserService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService,
  ) {
      this.model = new RegistrationModel();
      this.form = new RegistrationForm(this.model);
  }

  // start form validation (to show what is wrong)
  private invalidForm(): void {
    this.form.validate();
    this.formErrorMessage = true;
  }

  // start registration request
  public onSingUp(form): void {
    console.log(form.value);
    this.userData.registerUser(form.value)
      .subscribe (
        success => {
          this.alertService.success('Registration successful!', true);
          // this.router.navigateByUrl('login');
          form.reset();
        },
        error => {
          this.alertService.error(error);
        });
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {}

}

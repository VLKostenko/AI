import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '../../app.config';
import { HttpClient } from '@angular/common/http';

// Models
import ForgotModel from './forgot.model';
import ForgotForm from './forgot.form';

// Animation
import { fade } from '../../services/animations/animation';

@Component({
  selector: 'ai-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [fade]

})
export class ForgotComponent implements OnInit, OnDestroy {

  public  access = false;
  private user;
  public  message = '';
  public  isError = false;
  public  form: ForgotForm;
  private model: ForgotModel;
  public  isFormErrorMessage: boolean = false;
  private apiUrl: string = AppConfig.apiUrl;

  constructor(
    private router: ActivatedRoute,
    private http: HttpClient
    ) {
    this.model = new ForgotModel();
    this.form = new ForgotForm(this.model);
  }

  // start form validation (to show what is wrong)
  private invalidForm(): void {
    this.form.validate();
    this.isFormErrorMessage = true;
  }

  // check if Token is correct
  public checkToken(token): any {
    // console.log(5366, token);
    return this.http.post(this.apiUrl + '', { token: token }).subscribe((data) => {
      // console.log(1, data);
      this.user = data;
      this.access = true;
    }, () => {
      this.message = 'Something wrong with your reset url';
      this.isError = true;
    });
  }

  // start login request
  public onForgot(form): void {
    this.http.post(this.apiUrl + 'change-password',
      {password: form.value.password, confirmPassword: form.value.confirmPassword}).subscribe((data) => {
      this.message = 'Successfully updated';
      this.isError = false;
    }, () => {
      this.message = 'Something went wrong during updating';
      this.isError = true;
    });
  }


  // make subscribe on a component initialization
  public ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      console.log(params.token);
      this.checkToken(params.token);
    });
  }

  // make unsubscribe before destroying component
  public ngOnDestroy(): void {
  }

}

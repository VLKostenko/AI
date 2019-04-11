import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import RegistrationModel from './registration.model';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './must-match.validator';

export default class RegistrationForm {

	private formBuilder: FormBuilder;
  public formGroup: FormGroup;
	public model: RegistrationModel;

	constructor(model: RegistrationModel) {
		this.formBuilder = new FormBuilder();
		this.model = model;
		this.createForm();
	}

	// set form fields with validation rules
	public createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email, [Validators.email]),
      firstName: new FormControl(this.model.firstName, [Validators.required]),
      lastName: new FormControl(this.model.lastName, [Validators.required]),
      confirmPassword: new FormControl(this.model.confirmPassword, [Validators.required]),
			password: new FormControl(this.model.password, [Validators.required, Validators.minLength(8)])
		},
		{
			// validator to check that two fields match
			validator: MustMatch('password', 'confirmPassword')
		});

    this.formGroup.valueChanges.subscribe(data => {
			this.model.firstName = data.firstName;
			this.model.lastName = data.lastName;
			this.model.password = data.password;
			this.model.email = data.email;
			this.model.confirmPassword = data.confirmPassword;
    });
	}

	// form update
  public patchForm(data: any): void {
    this.formGroup.patchValue(data);
    Object.keys(data).forEach(field => {
      this.model[field] = data[field];
    });
	}

	// get form property name
  public getControl(name: string) {
    return this.formGroup.get(name);
	}

	// get form validation status
  get isValid() {
    return this.formGroup.valid;
	}

	// get group value
  get formData(): RegistrationModel {
    return this.formGroup.getRawValue();
	}

	// start form validation
  public validate(): void {
    this.validateFormFields(this.formGroup);
	}

	// form validation functionality
  public validateFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      }
    });
	}

}
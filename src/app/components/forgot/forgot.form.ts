import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ForgotModel from './forgot.model';

/*  ReactiveForm structure class  */

export default class ForgotForm {

	private formBuilder: FormBuilder;
  public formGroup: FormGroup;
	public model: ForgotModel;

	constructor(model: ForgotModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
	}

	// set form fields with validation rules
  public createForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email, [Validators.required])
    });
    this.formGroup.valueChanges.subscribe(data => {
      this.model.email = data.email;
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
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Services
import { UploadService } from './../../services/upload/upload.service';
import { AlertService } from './../../services/alert.service';

// Animations
import { fade } from '../../services/animations/animation';

@Component({
  selector: 'ai-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  animations: [fade]
})
export class UploadComponent implements OnInit, OnDestroy {


  form: FormGroup;
  error: string;
  userId = 1;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    public alertService: AlertService,
    ) { }

  public onFileChange(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }

  public onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.form.get('file').value);
    this.uploadService.upload(formData, this.userId).subscribe(
      (success) => this.alertService = success,
      (error) => this.alertService = error
    );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      file: ['']
    });
  }

  ngOnDestroy(): void {
    // this.uploadService.unsubscribe();
  }


}

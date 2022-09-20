import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UIHelpers } from 'src/helpers/ui-helpers';
import { NewsletterService } from 'src/services/newsletter.service';
export interface errors {
  general: string
}
@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.scss']
})
export class AddEmailComponent implements OnInit {
  addEmailForm: FormGroup
  errorMsg = ''
  successMsg = ''
  apiCall = false
  interval = null
  constructor(
    private fb: FormBuilder,
    private api: NewsletterService,
    public ui: UIHelpers,

  ) {
  }

  ngOnInit(): void {
    this.addEmailForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  get g() {
    return this.addEmailForm.controls
  }

  subscribe() {
    this.apiCall = true
    
    this.api.subscribe({'email_address':this.addEmailForm.controls['email'].value}).subscribe((resp: any) => {
      if (resp.success) {
        this.successMsg = resp.msg
      } else {
        this.errorMsg = resp.errors.general
      }
      this.apiCall = false
      this.addEmailForm.reset()
      this.setTimeout()
    })
  }

  setTimeout() {
    this.interval = setTimeout(() => {
      this.successMsg = this.errorMsg = ''
      clearTimeout(this.interval)
    }, 5000);
  }
}

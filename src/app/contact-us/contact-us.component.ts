import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    message: new FormControl('')

  });

  constructor(private builder: FormBuilder) { }

  onSubmit() {
    console.log(this.contactForm.value);
    // TODO: Implement Brevo
  }
}

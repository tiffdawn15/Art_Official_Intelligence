import { Component } from "@angular/core";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ContactService } from "../contact.service";

interface ToFrom {
  name: string;
  email: string;
}

export interface EmailRequest {
  sender: ToFrom;
  to: ToFrom;
  htmlContent: string;
  subject: string;
  replyTo: ToFrom;
}

//   `{
//     "sender": {
//         "name": "Mary from MyShop",
//         "email": "no-reply@myshop.com"
//     },
//     "to": [
//         {
//             "email": "tiffanymesser15@gmail.com",
//             "name": "Tiff"
//         }
//     ],

//     "htmlContent": "<!DOCTYPE html> <html> <body> <h1>This is sample HTML</h1> </html>",
//     "subject": "Login Email confirmation",
//     "replyTo": {
//         "email": "ann6533@example.com",
//         "name": "Ann"
//     },
//     "tags": [
//         "tag1",
//         "tag2"
//     ]
// }`
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent {
  contactForm = new FormGroup({
    name: new FormControl("", Validators.min(3)),
    email: new FormControl("", Validators.min(3)),
    message: new FormControl("", Validators.min(3)),
  });

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService
  ) {}

  onSubmit() {
    console.log(this.contactForm.value);
    const from = {
      name:
        this.contactForm?.get("name")?.value !== null
          ? this.contactForm.get("name")?.value
          : "",
      email: this.contactForm.get("email")?.value,
    };

    const to = {};
    // TODO: Implement Good object practices here
    const message = {
      sender: from,
      to: to,
      htmlContent: "",
      subject: "",
      replyTo: from,
    };

    console.log(message)

    this.contactService.sendEmail(message).subscribe(
      (response) => console.log("Success!", response),
      (error) => console.error("Error!", error)
    );
  }
}

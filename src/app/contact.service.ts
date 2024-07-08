import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmailRequest } from "./contact-us/contact-us.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  url = "https://api.brevo.com/v3/smtp/email";

   httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',  
    'api-key': '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', 
  });

  constructor(public http: HttpClient) {}

  // TODO: Turn this into an object that we can pass from the contactu-us ts file
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

  sendEmail(msg: any): Observable<Object> {

    return this.http.post(this.url, msg, { headers: this.httpOptions });
  }
}

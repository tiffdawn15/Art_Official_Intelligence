import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  @Input()
  text = ''; // <-- name Angular and Builder inputs the same 
  name = ''
}



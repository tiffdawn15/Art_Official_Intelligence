import { Component, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular'; // <-- import BuilderBlock

@Component({
  selector: 'app-about-us',
  template: 'Hello: {{name}}!',

  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  @Input()
  text = ''; // <-- name Angular and Builder inputs the same 
  name = ''
}

BuilderBlock({
  tag: 'app-about-us', 
  name: 'Custom thing',
  inputs: [
    {
      name: 'text', // <-- this name matches the Angular @Input() above
      type: 'string',
    },
  ],
})(AboutUsComponent);

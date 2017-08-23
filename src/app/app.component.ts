import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { gradients } from './grad-types.class';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public gradientsSafe;
  public grad: string = 'night-call';
  public gradients = gradients;
  public _gradients = _.keys(gradients);

  constructor(private domSanitizer: DomSanitizer){
    this.gradientsSafe = _.mapValues(this.gradients, (val) => {
      return domSanitizer.bypassSecurityTrustStyle(val);
    });
  }
}

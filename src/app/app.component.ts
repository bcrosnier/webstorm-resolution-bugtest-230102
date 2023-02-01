import { Component } from '@angular/core';
import { IMyInterface } from "../model/IMyInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'webstorm-resolution-bugtest-230102';

  myInterface?: IMyInterface;
}

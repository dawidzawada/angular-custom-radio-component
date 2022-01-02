import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-radio-component';
  disableAll: boolean = false;
  disableLast: boolean = false;
  model = {
    name: "",
    pet: 'hamster',
  };
}

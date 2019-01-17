import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I am app component';
  componentTitle = 'I am component title';

  clickHandler() {
    alert('Hello');
  }
}

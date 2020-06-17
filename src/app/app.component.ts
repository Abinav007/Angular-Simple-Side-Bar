import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sidebar';
  sideBarOpenClose = false;
  toggleOpenClose () {
    this.sideBarOpenClose = !this.sideBarOpenClose;
  }
}

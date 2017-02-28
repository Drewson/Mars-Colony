import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
              <p> on key up run changetitle <input [(ngModel)]='newTitle'></p>
              <button (click)="changeTitle()">Change the title </button>
              <p>You've Clicked the button {{clickCount}}
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  clickCount = 0;
  newTitle = this.title;
  changeTitle(e) {
    if(!e){
      this.title = this.newTitle;
      this.clickCount++;
    } else {
      this.newTitle = e.target.value;
    }
  }
}

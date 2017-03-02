import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="page">
    <router-outlet></router-outlet>
  </div>
              `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}

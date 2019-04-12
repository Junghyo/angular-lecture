import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="card-body">
      <h1>Chapter05 Component</h1>
    </div>
    <div class="card-body">
      <a01Component></a01Component>
      <a02Component></a02Component>
      <a03Component></a03Component>
      <a04Component></a04Component>
      <a05Component></a05Component>
      <a06Component></a06Component>
      <a07Component></a07Component>
      <a08Component></a08Component>
    </div>
  `
})
export class AppComponent {
  title = 'template738';
}

import { Component } from '@angular/core';
import { TagsComponent } from './tags.component';

@Component({
  // moduleId: module.id,
  selector: 'app-post',
  template: `
    <article>
      <ng-content></ng-content>

      <footer>
        <app-tags></app-tags>
      </footer>
    </article>
  `,
  styles: [`
    article {
      padding: 5px 15px;
      border: 1px solid #eee;
      height: 100%;
      box-sizing: border-box;
    }
  `],
  directives: [TagsComponent]
})

export class PostComponent {}

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-tags',
  template: `
    <ul>
      <li *ngFor="let tag of tags">
        <a href="{{tag.path}}">
          {{tag.tagName}}
        </a>
      </li>
    </ul>
    <div *ngIf="!tags.length">
      <span>no tags</span>
    </div>
  `,
  styleUrls: ['tags.component.css']
})

export class TagsComponent {
  tags: any = [{
    tagName: 'Nature',
    path: '#'
  }, {
    tagName: 'Cities',
    path: '#'
  }, {
    tagName: 'Peoples',
    path: '#'
  }, {
    tagName: 'Girls',
    path: '#'
  }];
}

import { Component } from '@angular/core';
import { NavComponent, PostComponent } from './other';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root', // '[app-root]' for <div app-root></div>
  templateUrl: 'app.component.html',
  styleUrls: [
    'common.css',
    'app.component.css'
  ],
  directives: [
    ROUTER_DIRECTIVES,
    NavComponent,
    PostComponent
  ]
})
export class AppComponent {
  name: string = '1Team';
  // valueAfterEmit: string = 'Empty';

  posts: any = [{
    title: <string> 'What is Lorem Ipsum?',
    content: <string> 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }, {
    title: <string> 'Why do we use it?',
    content: <string> `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  }, {
    title: <string> 'Where does it come from?',
    content: <string> `It has survived not only five centuries, 
      but also the leap into electronic typesetting, remaining essentially unchanged.`
  }, {
    title: <string> 'Where does it?',
    content: <string> 'It has survived not only five centuries, remaining essentially unchanged.'
  }];

  postsQuantity: number = this.posts.length;

  logoIsItalic() {
    return true;
  }

  // onClickedInApp(value: string) {
  //   this.valueAfterEmit = value;
  // }

}

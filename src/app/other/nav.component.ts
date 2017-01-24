import { Component, OnInit, Input } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // if we want to change value inside component like <app-nav [worksQuantity]="15"></app-nav>
  @Input() worksQuantity: number = 0;


  portfolioClicked() {
    alert('The portfolio has ' + this.worksQuantity + ' works');
  }
}

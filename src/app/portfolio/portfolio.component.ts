import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // technology: string;

  constructor(/* private route: ActivatedRoute */) {
    // this.technology = route.snapshot.params['technology'];
  }

  ngOnInit() {}

}

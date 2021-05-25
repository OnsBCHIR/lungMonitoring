import { Component, OnInit} from "@angular/core";

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import "src/app/pages/tables/threed.js";
import "node_modules/plotly.js";
declare var  threeD: any;
@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  providers: [NgbCarouselConfig] 
})
export class TablesComponent implements OnInit {

  images = [
    'assets/img/first.png',
    'assets/img/second.png',
    'assets/img/third.png'

  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 180;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }



  ngOnInit(): void {
    new threeD();

    



  }


  

 

}

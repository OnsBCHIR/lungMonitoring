import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import "src/app/pages/map/threed.js";
import "node_modules/plotly.js";
declare var  threeD: any;
@Component({
  selector: "app-map",
  templateUrl: "map.component.html"
})
export class MapComponent implements  OnInit{

  constructor() {
  }
  ngOnInit() {
    new threeD();

   
  }

 
}

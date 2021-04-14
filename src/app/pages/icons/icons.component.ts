import { Component, OnInit,NgModule  } from "@angular/core";

import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';


@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html",
  
})
export class IconsComponent implements OnInit {
   chartOptions = new Chart({   
     chart: {
        type: "spline"
     },
     title: {
        text: "Region of intrests"
     },
     subtitle: {
        text: "Source: TuChemnitz.com"
     },
     xAxis:{
        categories:["1", "2", "3", "4", "5", "6",
           "7", "8", "9", "10", "11", "12"]
     },
     yAxis: {          
        title:{
           text:""
        } 
     },
     tooltip: {
        valueSuffix:""
     },
     series: [
        { type: 'line',
           name: 'ROI1',
           data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {type: 'line',
           name: 'ROI2',
           data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {type: 'line',
           name: 'ROI3',
           data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {type: 'line',
           name: 'ROI4',
           data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
     ]
  });

  constructor() {
  }

  ngOnInit() {
 
  }


}

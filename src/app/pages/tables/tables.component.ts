import { Component, OnInit ,ViewChild,ElementRef} from "@angular/core";
import * as Plotly from 'plotly.js';
@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  @ViewChild('chart',{static: true}) el :ElementRef;

  constructor() {}

  ngOnInit() {
    this.basicChart()
   
  }
  basicChart(){
    const element = this.el.nativeElement
    const data = [{
      x:[1,2,3,4,5],
      y:[1,2,4,8,16]
    }]
    const style ={

      margin: {t:0}
    }
    Plotly.plot(element,data,style)
  }
 

}

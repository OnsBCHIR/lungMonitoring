
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {ThreedService} from 'src/app/service/threed.service';
import * as Plotlyjs from 'plotly.js/dist/plotly';
import { take } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {
 

@ViewChild('chart',{static: true}) el : ElementRef ;
constructor(public db : AngularFireDatabase) {
  

  }


  ngOnInit() {
    this.db.list("data").valueChanges().subscribe((value: any) => this.topoChart(value));

  }

 click(){

 }
  topoChart(data){
    console.log(data);
    const element = this.el.nativeElement
    const formattedData = [{
      z:data,
      type:'surface'
    }];
    const layout={
      title:'3D Model',
      autosize : true,
      width:750,
      height:500,
      margin:{
        l:65,
        r:50,
        b:65,
        t:90,
      }
  
    };
    Plotlyjs.plot(element,formattedData,layout);
  }
}

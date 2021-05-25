
import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ThreedService} from 'src/app/service/threed.service';
// import * as Plotlyjs from 'plotly.js/dist/plotly';
//import { take } from 'rxjs/operators';
//import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import "../../../assets/js/three.min.js";
//import "../../../assets/js/STLLoader.js";
//import "../../../assets/js/stats.min.js";
//import "../../../assets/js/dat.gui.min.js";

//import "../../../assets/js/lung.js";
//declare var f3: any;
//declare var stloader : any;
//declare var stat : any;
//declare var datgui : any;
//declare var renderLung: any;
//declare var gui: any;

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit{


//@ViewChild('chart',{static: true}) chart : ElementRef ;
//@ViewChild('lungDiv',{static: true})  lungDiv: ElementRef;

constructor() {


  }


  ngOnInit() {
   // this.db.list("data").valueChanges().subscribe((value: any) => this.topoChart(value));
 //  new f3();
  // new stloader();
  // new stat();
 //  new datgui();
  //  new renderLung();

  }

 click(){

 }

//  ngOnDestroy(): void {
 // console.log("kljlk");
//  gui.destroy();

//  }
/*  topoChart(data){
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
  }*/
}
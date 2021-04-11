import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
//https://plotly-demo-9d466-default-rtdb.firebaseio.com/
@Injectable({
  providedIn: 'root'
})
export class ThreedService {

  constructor( ) { 

  }
  

  getData(dataset : string){
   //  return this.db.list(dataset)
  }
}

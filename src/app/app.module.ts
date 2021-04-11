import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';



import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common';
import { ComponentsModule } from "./components/components.module";
import {ChartModule} from 'angular-highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
//import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';


@NgModule({
  imports: [  
    BrowserAnimationsModule,
    BrowserModule,
    ChartModule,
  //  FirebaseListObservable,
  //  AngularFireDatabase,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,    
    AppRoutingModule,
   
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent,AdminLayoutComponent, AuthLayoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common';
import { ComponentsModule } from "./components/components.module";
import {ChartModule} from 'angular-highcharts';
//import { HighchartsChartComponent } from 'highcharts-angular';
//import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns' ;
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {IconsComponent} from '../app/pages/icons/icons.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [  
    BrowserAnimationsModule,
    BrowserModule,
    ChartModule,
    NgbModalModule,
  
  //  FirebaseListObservable,
  //  AngularFireDatabase,
    CommonModule,
    FlatpickrModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    RouterModule,   
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent,AdminLayoutComponent, AuthLayoutComponent, LoginComponent, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

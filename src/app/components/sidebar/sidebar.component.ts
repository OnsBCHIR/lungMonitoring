import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Ventilation",
    rtlTitle: "الرموز",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/maps",
    title: "PEEP titration",
    rtlTitle: "خرائط",
    icon: "icon-sound-wave",
    class: "" },
  {
    path: "/notifications",
    title: "Perfusion",
    rtlTitle: "إخطارات",
    icon: "icon-molecule-40",
    class: ""
  },


  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-notes",
    class: ""
  }
 

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

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
    path: "/icons",
    title: "Agenda",
    rtlTitle: "الرموز",
    icon: "icon-paper",
    class: ""
  },
  {
    path: "/maps",
    title: "My profile",
    rtlTitle: "",
    icon: "icon-badge",
    class: "" },
  {
    path: "/notifications",
    title: "List of Patients",
    rtlTitle: "",
    icon: "icon-align-left-2",
    class: ""
  },


  {
    path: "/tables",
    title: "Patient Details",
    rtlTitle: "",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/dashboard",
    title: "Online consultation",
    rtlTitle: "",
    icon: "icon-chat-33",
    class: ""
  },
 

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

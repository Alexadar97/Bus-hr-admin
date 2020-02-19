import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from '../../webservice.service';
import { DatatransferService } from '../../datatransfer.service';
import { Subscription } from 'rxjs/Subscription';
import { Chart } from 'angular-highcharts';
import { AuthGuard } from '../../canactivate.service';
import { Http, Response } from '@angular/http';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'upload', title: 'Upload File',  icon:'bubble_chart', class: '' },
    { path: 'settlement', title: 'Voucher Settlement',  icon:'content_paste', class: '' },
    { path: 'issuereport', title: 'Advance issued report',  icon:'library_books', class: '' },
    { path: '../login', title: 'Logout',  icon:'unarchive', class: 'active-pro'},
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  logintype: any;
  user_email: any;
  showGate: any = 'false';

  constructor(public getsession: AuthGuard, public getdata: DatatransferService, private router: Router, private makeapi: WebserviceService, private apiurl: DatatransferService, private http: Http){ }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.logintype = this.getsession.session().name;
    console.log(this.logintype)
    if (this.logintype === 'admin' || this.logintype === 'ciuser') {
      this.showGate = 'true';
    } else {
      this.showGate = 'false';
    }
    
  }
  // isMobileMenu() {
  //     if ($(window).width() > 991) {
  //         return false;
  //     }
  //     return true;
  // };

  logout() {
    console.log('Logout Done!');
    localStorage.removeItem('user_id');
    this.router.navigateByUrl('/login');
}
}

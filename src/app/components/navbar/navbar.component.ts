import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DatatransferService } from '../../datatransfer.service';
import { WebserviceService } from '../../webservice.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AuthGuard } from '../../canactivate.service';
import { ROUTES } from '../sidebar/sidebar.component';
declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: []
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    getCredentialsdata: any;

    editsellerForm: FormGroup;
    states: any;
    usertype: any;


    emailvalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")){2,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    numbervalidation = /^[0-9,/]+$/;
    alphanumeric = /^[a-zA-Z0-9]+$/;
    alphawithdot = /^[a-zA-Z. ]+$/;
    decimalnumber = /^(0|[1-9]\d*)(\.\d+)?$/;
    alpha = /^[a-zA-Z]+$/;
    zipvalidation = /^.{6,6}$/;
    userrole: any;
    constructor(public getsession: AuthGuard, private Formbuilder: FormBuilder, private makeapi: WebserviceService, location: Location, private element: ElementRef, public router: Router, public getdata: DatatransferService) {
        this.location = location;
        this.sidebarVisible = false;

        /* edit form */
        this.editsellerForm = Formbuilder.group({
            'companyname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
            'email': [null, Validators.compose([Validators.required, Validators.pattern(this.emailvalidation)])],
            'phone': [null, Validators.compose([Validators.required, Validators.pattern(this.numbervalidation), Validators.minLength(10), Validators.maxLength(15)])],
            'address': [null, Validators.compose([Validators.required])],
            'street': [null, Validators.compose([Validators.required])],
            'city': [null, Validators.compose([Validators.required, Validators.pattern(this.alpha)])],
            'homestate': [null, Validators.compose([Validators.required])],
            'country': [null],
            'zip': [null, Validators.compose([Validators.required, , Validators.pattern(this.zipvalidation)])],
            'gstin': [null, Validators.compose([Validators.required, Validators.pattern(this.alphanumeric), Validators.minLength(15), Validators.maxLength(15)])],
            'cin': [null, Validators.compose([Validators.pattern(this.alphanumeric), Validators.minLength(21), Validators.maxLength(21)])],
        });

    }

    ngOnInit() {

        this.userrole = this.getsession.session().name;
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    show = false;
    sidebarToggle() {
        if (this.show == true) {
            $('#sidemenu').addClass("showmenu");
            this.show = false;
        }
        else {
            $('#sidemenu').removeClass("showmenu");
            this.show = true;
        }
    };

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();

        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    logout() {
        this.router.navigateByUrl('/login');
        localStorage.removeItem('Daim-forms');
    }
}

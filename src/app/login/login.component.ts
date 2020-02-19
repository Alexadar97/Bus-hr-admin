import { Component, OnInit, Injectable, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { WebserviceService } from '../webservice.service';
import { DatatransferService } from '../datatransfer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errormsg: any;
  loginForm: FormGroup;
  private loginapi = this.getdata.appconstant + 'login';
  finalappcode: any;
  emailvalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")){2,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  numbervalidation = /^[0-9,/]+$/;
  alphanumeric = /^[a-zA-Z0-9]+$/;
  alphawithdot = /^[a-zA-Z. ]+$/;
  decimalnumber = /^(0|[1-9]\d*)(\.\d+)?$/;

  constructor(private Formbuilder: FormBuilder, private router: Router, private makeapi: WebserviceService, private getdata: DatatransferService, private http: Http) {
    this.loginForm = Formbuilder.group({
      'name': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }
  enterkey(keycode) {
    if (keycode == 13)
      this.login();
  }
  login() {
    var getdata = this.loginForm.value;
    var username = getdata.name;
    var password = getdata.password;
  
     if (username == 'admin' && password == 'admin') {
      delete getdata.password;
      getdata.roleid = 1;
      localStorage.setItem("Daim-forms", JSON.stringify(getdata));
      this.router.navigateByUrl('/dashboard/courselist');
    }
    else {
      this.errormsg = 'Invalid Username or Password';
    }

    // let logindata = 'loginUser=' + JSON.stringify(this.loginForm.value);
    // return this.makeapi.method(this.loginapi, logindata, "post")
    //   .subscribe(data => {
    //     if (data.status == "success") {
    //       localStorage.setItem("sevinvoicesession", JSON.stringify(data));
    //       this.router.navigateByUrl('/dashboard/home');
    //     } else if (data.status == "NA") {
    //       this.errormsg = 'Invalid Username or Password';
    //     }
    //     else {
    //       this.errormsg = 'Invalid Username or Password';
    //     }

    //   },
    //     Error => {
    //       console.log('error in login')
    //     });
  }
}


import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
@Injectable()
export class WebserviceService {
  constructor(private http: Http) {
  }

  method(url, data, method): Observable<any> {
    if (method === 'post') {
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(url, data, { headers: headers })
          .map((response: Response) => response.json())
          .catch((error: any) => {
              if (error.status === 500) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 400) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 409) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 406) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 403) {
                 
                  
              }
          });
  }
  if (method === 'postlogin') {
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(url, data, { headers: headers })
          .map((response: Response) => response);
  }
  if (method === 'postjson') {
      const headers = new Headers();
      headers.append('content-type', 'application/json');

      return this.http.post(url, data, { headers: headers })
          .map((response: Response) => response.json())
          .catch((error: any) => {
              if (error.status === 500) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 400) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 409) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 406) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 403) {
                 
              }
          });
  }
  if (method === 'postjsonlogin') {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(url, data, { headers: headers })
          .map((response: Response) => response.json())
          .catch((error: any) => {
              if (error.status === 500) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 400) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 409) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 406) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 403) {
              
                  
              }
          });
  }
  if (method === 'postfilemultipart') {
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      return this.http.post(url, data, { headers: headers })
          .map((response: Response) => response.json())
          .catch((error: any) => {
              if (error.status === 500) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 400) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 409) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 406) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 403) {
                  
                   
              }
          });
  }
  if (method === 'get') {
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      console.log(url)
      return this.http.get(url, { headers: headers })
          .map((response: Response) => response.json())
          .catch((error: any) => {
              if (error.status === 500) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 400) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 409) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 406) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 403) {
                
                   
              }
          });
  }
  if (method === 'file') {
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      return this.http.post(url, data, { headers: headers })
          .map((response: Response) => response.json())
          .catch((error: any) => {
              if (error.status === 500) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 400) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 409) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 406) {
                  return Observable.throw(new Error(error.status));
              }
              else if (error.status === 403) {
                 
              }
          });
  }
  }
}

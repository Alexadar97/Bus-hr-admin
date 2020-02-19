import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { DatatransferService } from './../datatransfer.service'
import { WebserviceService } from './../webservice.service'


declare var $;

@Component({
  selector: 'app-course-question',
  templateUrl: './course-question.component.html',
  styleUrls: ['./course-question.component.css']
})
export class CourseQuestionComponent implements OnInit {

coursequestion : any;


  constructor(private Router: Router, private FormBuilder: FormBuilder, private getdata: DatatransferService,) { 
    this.coursequestion = this.FormBuilder.group({
      'question': [null, Validators.compose([Validators.required])],
      'explainaiton': [null, Validators.compose([Validators.required])],
      'answersa': [null, Validators.compose([Validators.required])],
      'answersb': [null, Validators.compose([Validators.required])],
      'answersc': [null, Validators.compose([Validators.required])],
      'answersd': [null, Validators.compose([Validators.required])],
      'mlanswera': [null, Validators.compose([Validators.required])],
      'mlanswerb': [null, Validators.compose([Validators.required])],
      'mlanswerc': [null, Validators.compose([Validators.required])],
      'mlanswerd': [null, Validators.compose([Validators.required])],
      'selected': [null, Validators.compose([Validators.required])],
      'select': [null, Validators.compose([Validators.required])],
      'multiple': [false],
    });
   
  }

  ngOnInit() {

  }
  save(type) {
    if (this.coursequestion.invalid) {
      this.markFormGroupTouched(this.coursequestion);
            this.getdata.showNotification('bottom', 'right', 'Form is invalid !!', "danger");
           console.log(this.getdata)
      return false;
  } 
  else if (type == 'draft') {
      $('#draft').modal('show')
      this.getdata.showNotification('bottom', 'right', 'Form is valid !!', "success");
    }
    else if (type == 'publish') {
      $('#publish').modal('show')
      this.getdata.showNotification('bottom', 'right', 'Form is valid !!', "success");
  }
  
  }
  confirmsavedraft(){
    $('#draft').modal('hide');
    this.Router.navigateByUrl('/dashboard/courselist')
  }
  confirmpublish(){
    $('#publish').modal('hide');
    this.Router.navigateByUrl('/dashboard/courselist')
  }
  nextclick(){
    if (this.coursequestion.invalid) {
      console.log(this.coursequestion) 
      this.markFormGroupTouched(this.coursequestion);
      this.getdata.showNotification('bottom', 'right', 'Form is invalid !!', "danger");
      return false;
  }
  else{
      this.getdata.showNotification('bottom', 'right', 'Form is valid !!', "success");
  }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
 
}

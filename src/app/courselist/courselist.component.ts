import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
declare var $;
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  public imagePath;
  imgURL: any;
  Courseform: any;
  public message: string;
  p1 = 1;
  constructor(private Router: Router, private Formbuilder: FormBuilder, ) {

    this.Courseform = this.Formbuilder.group({
      'examtitle': [null, Validators.compose([Validators.required])],
      'uploadimage': [null, Validators.compose([Validators.required])],
      'levelform': [null, Validators.compose([Validators.required])],
      'totalnumber': [null, Validators.compose([Validators.required])]
    });

  }


  ngOnInit() {
  }

  courselist = [
  { "name": "Introduction to Bus Development", "QuestionsCount": 23, "PublishedDate": "18-4-2019", "Status": "Draft" },
  { "name": "Bus Management", "QuestionsCount": 3, "PublishedDate": "8-4-2019", "Status": "Active" },
  { "name": "Introduction to Travel Bus", "QuestionsCount": 13, "PublishedDate": "28-4-2019", "Status": "Draft" },
  { "name": "Introduction to School Bus", "QuestionsCount": 15, "PublishedDate": "8-4-2019", "Status": "Active" },
  { "name": "Bus Management", "QuestionsCount": 25, "PublishedDate": "18-4-2019", "Status": "Draft" },
  { "name": "Introduction to Bus Development", "QuestionsCount": 33, "PublishedDate": "28-4-2019", "Status": "Draft" },
  { "name": "Bus Management", "QuestionsCount": 22, "PublishedDate": "8-4-2019", "Status": "Active" },
  { "name": "Introduction to Travel Bus", "QuestionsCount": 8, "PublishedDate": "18-4-2019", "Status": "Draft" },
  { "name": "Introduction to School Bus", "QuestionsCount": 10, "PublishedDate": "28-4-2019", "Status": "Active" },
  { "name": "Bus Management", "QuestionsCount": 13, "PublishedDate": "8-4-2019", "Status": "Draft" },]
  modalname: any;
  addassesment() {
    this.modalname = "Create New Assessment";

    $("#addviewassesment").modal("show");
  }
  navigate(i,page){
    this.Router.navigateByUrl(page)
  }
  
  Uploadfilename: any;
  Uploadfile: any;
  UploaderrorFileUpload: any;
  uploadfilenamepart: any;
  uploadfile(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      var file: File = fileList[0];
      this.Uploadfilename = file.name;
      var finalfilename = (this.Uploadfilename).split(".");
      this.uploadfilenamepart = finalfilename[0];
      this.Uploadfile = file;
      this.UploaderrorFileUpload = "";

    }
  }
  addclick() { 
    if (this.Courseform.invalid) {
      this.markFormGroupTouched(this.Courseform);
      return false;
    // }
    // else if (this.Courseform.value.exigency == true && this.Courseform.value.l3 == null) {
    // this.getdata.showNotification('bottom', 'right', 'Form is invalid !!', "danger");
    //   return false;
    // }
    // else if (this.Courseform.value.exigency == true && (this.Courseform.value.remarks == null || this.materialcredittform.value.remarks == '')) {
    //   this.getdata.showNotification('bottom', 'right', 'Form is invalid !!', "danger");
    //  return false;
  
  }
  else{
    $("#addviewassesment").modal("hide");
    this.Router.navigateByUrl('/dashboard/coursequestion')
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


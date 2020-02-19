import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
declare var $;

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
  public imagePath;
  imgURL: any;
  Courseform: any;
  public message: string;
  p1 = 1;
  constructor(private Router: Router, private Formbuilder: FormBuilder, ) {

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
 
}


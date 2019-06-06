import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from "@angular/forms";
import { DocumentFieldsService } from './document-fields.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormGroup;
  unsubcribe: any;
  //public fields: any[];

   dynamicsFields = [
     {
      type: 'datetext',
      name: 'date',
      label: 'Date',
      value: '',
      required: true,
      validations: 'required'
     },
     {
      type: 'datetext',
      name: 'confirmDate',
      label: 'Confirm Date',
      value: '',
      required: true,
      recapture: true,
      validateField: 'date'
     },
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: false
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      required: true,
      hasPattern: true,
      pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      value: ''
    },

    {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: true,
      onUpload: this.onUpload.bind(this)
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];

    public fields: any = this.dynamicsFields;

  constructor(private rest: DocumentFieldsService) {
    
    // this.rest.getDocuments().subscribe((data: []) => {  
    //   this.fields = data;
    //   console.log(this.fields);
    // });

    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {    
      this.fields = JSON.parse(update.fields);
    });

  }

  ngOnInit() {
  }

  onUpload(e) {
    console.log(e);
  }

  getFields() {
    console.log("getFields");
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
  
}

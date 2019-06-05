import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'recapture',
  templateUrl: './form-validate-recapture.component.html',
  styleUrls: ['./form-validate-recapture.component.css']
})
export class FormValidateRecaptureComponent implements OnInit {

  public form: FormGroup;
  
  constructor() { 
  }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-builder',
  template: `
  <div class="form-group row" [formGroup]="form">
    <label class="col-md-3 form-control-label" [attr.for]="field.label">
      {{field.label}}
      <strong class="text-danger" *ngIf="field.required">*</strong>
    </label>
    <div class="col-md-9" [ngSwitch]="field.type">
      <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
      <datetextbox *ngSwitchCase="'datetext'" [field]="field" [form]="form"></datetextbox>
      <dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></dropdown>
      <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
      <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
      <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file>
      <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isTouched">
      <div *ngIf="isRequired">{{field.label}} es requerido</div>
      <div *ngIf="hasNotFormat">{{ field.label }} no tiene el formato correcto </div>
      <div *ngIf="NoMatch">{{ field.label }} No match </div>
      </div>
    </div>
  </div>
  `
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:any;
  @Input() form:any;
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  get isTouched() { return this.form.controls[this.field.name].touched; }
  get isRequired() { return this.form.controls[this.field.name].errors.required; }
  get hasNotFormat() { return this.form.controls[this.field.name].errors.pattern; }
  get NoMatch() { return this.form.controls[this.field.name].errors.noMatch; }

  constructor() { }

  ngOnInit() {
  }

}

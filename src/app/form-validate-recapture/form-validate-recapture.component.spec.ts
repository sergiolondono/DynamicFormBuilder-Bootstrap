import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidateRecaptureComponent } from './form-validate-recapture.component';

describe('FormValidateRecaptureComponent', () => {
  let component: FormValidateRecaptureComponent;
  let fixture: ComponentFixture<FormValidateRecaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidateRecaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidateRecaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

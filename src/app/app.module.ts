import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

// dynamic form builder

import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

//export const options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule , 
    FormsModule,
    DynamicFormBuilderModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

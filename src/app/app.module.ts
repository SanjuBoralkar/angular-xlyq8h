import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, TemplateDrivenComponent, ReactiveFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

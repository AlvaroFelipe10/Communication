import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { FormNativeValidationComponent } from './form-native-validation/form-native-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    FormNativeValidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

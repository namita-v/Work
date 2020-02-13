import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewFormComponent } from './preview-form.component';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule}  from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';


@NgModule({
  declarations: [PreviewFormComponent],
  imports: [
    CommonModule,
    FormlyModule.forRoot({}),
    ReactiveFormsModule,
    FormlyMaterialModule
  ],
  exports : [PreviewFormComponent]
})
export class PreviewFormModule { }

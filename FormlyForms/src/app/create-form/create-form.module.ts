import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [CreateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [CreateFormComponent]
})
export class CreateFormModule { }

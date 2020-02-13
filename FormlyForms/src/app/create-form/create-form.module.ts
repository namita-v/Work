import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {DragDropModule} from '@angular/cdk/drag-drop';

import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatListModule} from "@angular/material";
@NgModule({
  declarations: [CreateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  exports : [CreateFormComponent]
})
export class CreateFormModule { }

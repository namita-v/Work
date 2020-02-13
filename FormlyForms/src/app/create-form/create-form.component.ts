import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {fieldTypes} from '../interfaces'

@Component({
  selector: 'app-create-form',  
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  @Output("onClick") onSave=new EventEmitter<any>();
  userForm: FormGroup;
  fields:FormArray;
  types = [
      {"label":"Input" , "type": fieldTypes.Input},
      {"label":"Textarea" , "type": fieldTypes.Textarea},
      {"label":"Checkbox" , "type": fieldTypes.Checkbox}
  ]
  constructor(private formBuilder: FormBuilder) {
   
    
   }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
     
      fields:this.formBuilder.array([ this.createField() ])
  
    
  });

  }


  addFields(): void {
    this.fields = this.userForm.get('fields') as FormArray;
    this.fields.push(this.createField());
  }

  createField(): FormGroup {
    return this.formBuilder.group({
      label: '',
      key: '',
      type: ''
    });
  }

  removeFields(i){
    const fields=this.userForm.get('fields') as FormArray;
    fields.removeAt(i);
  }

  drop(event: CdkDragDrop<string[]>) {
   moveItemInArray(this.userForm.get('fields')['controls'], event.previousIndex, event.currentIndex);
    moveItemInArray(this.userForm.get('fields').value, event.previousIndex, event.currentIndex);
  }
  onClick()
  {
    //console.log(this.userForm);

    this.onSave.emit(this.userForm.getRawValue());
    console.log(this.userForm);
  }

}


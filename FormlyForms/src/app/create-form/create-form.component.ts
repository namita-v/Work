import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-form',  
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  @Output("onClick") onSave=new EventEmitter<any>();
  userForm: FormGroup;
  types: Array<string> = [
    'input',
    'textarea',
    'checkbox'
  ];
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'label': [''],
      'key': [''],
      'type': ['']
      
    });
   }

  ngOnInit() {
    console.log(this.userForm)
  }

  onClick()
  {
    //console.log(this.userForm);

    this.onSave.emit(this.userForm.getRawValue());

  }

}


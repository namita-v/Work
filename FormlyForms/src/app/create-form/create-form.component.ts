import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-form',  
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  userForm: FormGroup;
  designations: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'firstName': [''],
      'lastName': [''],
      'age': [''],
      'designation': ['']
      
    });
   }

  ngOnInit() {
    console.log(this.userForm)
  }

}


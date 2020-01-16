import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css']
})
export class PreviewFormComponent implements OnInit,OnChanges {
  @Input() userForm: any;  
  
  constructor() {}
  form = new FormGroup({});
  model :any = {};
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    }
  }];

  submit(model) {
    console.log(this.userForm);
    console.log(model);
  }
  ngOnChanges(changes: SimpleChanges){
if(this.userForm){
    this.fields[0].key=this.userForm.key;
    this.fields[0].type=this.userForm.type;
    this.fields[0].templateOptions.label=this.userForm.label;
    this.fields[0].templateOptions.placeholder=this.userForm.label;
} 
  }
  ngOnInit() {

  
  }

}

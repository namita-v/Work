import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css']
})
export class PreviewFormComponent implements OnInit,OnChanges {
  @Input() userForm: any;  
  
  constructor() {}
  public designedFields = [];
  form = new FormGroup({});
  model = {};
  
  fields: FormlyFieldConfig[] = [];

  previewForm(designedFields){

    console.log(designedFields)
    let array=[];

        for (let i = 0; i <designedFields.length; i++) {
        array.push(this.itemGenerator(designedFields[i]));
        this.fields=array;
        console.log(this.fields)
        }
    }

  itemGenerator(designedItem){
   
    const formlyItem: FormlyFieldConfig = {
     
      templateOptions:{}
      
    };
    formlyItem.key=designedItem.key;
    formlyItem.templateOptions.label=designedItem.label;
    formlyItem.type = designedItem.type;
    console.log(formlyItem);
    
    return formlyItem;
  }

  submit(model)
  {
    console.log(this.userForm);
    console.log(model);
  }
  ngOnChanges(changes: SimpleChanges){
   this.designedFields=[];
    if(this.userForm){
      console.log(this.userForm)
        for(let i=0;i<this.userForm.fields.length;i++){
        const formControlsObj=  this.userForm.fields[i];
        this.designedFields.push(formControlsObj);
        console.log(this.designedFields);
        this.previewForm(this.designedFields);
      }
    }
  
}
  ngOnInit() {
  
  
  }

}

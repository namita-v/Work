import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormlyForms';
  public userForm : any;


onClick(event){

  this.userForm=event;


}

}

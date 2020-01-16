import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CreateFormModule} from './create-form/create-form.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PreviewFormModule} from './preview-form/preview-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateFormModule,
    PreviewFormModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

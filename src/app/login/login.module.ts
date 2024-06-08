import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigneUpComponent } from './signe-up/signe-up.component';



@NgModule({
  declarations: [
    SigneUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SigneUpComponent]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesComponent } from './rates.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RatesComponent
  ],
  exports: [
    RatesComponent
  ]
})
export class RatesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALIDATORS } from '@angular/forms';

import { CustomValidators } from './custom.validators';
import { ErrorsComponent } from './errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorsComponent,
  ],
  exports: [
    ErrorsComponent
  ],
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: CustomValidators.notempty,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: CustomValidators.notlow,
      multi: true
    }
  ]
})
export class ValidationModule { }

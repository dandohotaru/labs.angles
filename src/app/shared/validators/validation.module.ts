import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALIDATORS } from '@angular/forms';

import { CustomValidators } from './custom.validators';
import { ErrorsDirective } from './errors.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorsDirective,
  ],
  exports: [
    ErrorsDirective
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

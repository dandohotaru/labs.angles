import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }

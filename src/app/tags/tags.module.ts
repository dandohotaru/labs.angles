import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TagsComponent } from './tags.component';
import { TagsValueAccessor } from './tags.accessor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations:[
    TagsComponent,
    TagsValueAccessor,
  ],
  exports:[
    TagsComponent,
    TagsValueAccessor
  ],
})
export class TagsModule { }

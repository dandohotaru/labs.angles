import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TagsComponent } from './tags.component';
import { TagsAccessor } from './tags.accessor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations:[
    TagsComponent,
    TagsAccessor,
  ],
  exports:[
    TagsComponent,
    TagsAccessor
  ],
})
export class TagsModule { }

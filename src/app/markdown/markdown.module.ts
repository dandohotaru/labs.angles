import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarkdownComponent } from './markdown.component';
import { MarkdownAccessor } from './markdown.accessor';
import { MarkdownToolbar } from './markdown.toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    MarkdownComponent,
    MarkdownAccessor
  ],
  exports: [
    MarkdownComponent,
    MarkdownAccessor
  ],
  providers: [
    MarkdownToolbar
  ],
})
export class MarkdownModule { }

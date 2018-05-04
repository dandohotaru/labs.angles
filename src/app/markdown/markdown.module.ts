import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarkdownComponent } from './markdown.component';
import { MarkdownToolbar } from './markdown.toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    MarkdownComponent
  ],
  providers: [
    MarkdownToolbar
  ],
  exports: [
    MarkdownComponent
  ]
})
export class MarkdownModule { }

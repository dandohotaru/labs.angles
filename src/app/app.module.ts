import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ValidationModule } from './shared/validators/validation.module';

import { AppComponent } from './app.component';
import { MarkdownModule } from './markdown/markdown.module';
import { FieldModule } from './fields/field.module';
import { TagsModule } from './tags/tags.module';
import { StarsModule } from './stars/stars.module';
import { RatesModule } from './stars/rates.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationModule,
    MarkdownModule,
    FieldModule,
    TagsModule,
    StarsModule,
    RatesModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

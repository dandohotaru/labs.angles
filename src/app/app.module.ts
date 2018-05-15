import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MarkdownModule } from './shared/components/markdown/markdown.module';
import { FieldModule } from './shared/components/fields/field.module';
import { TagsModule } from './shared/components/tags/tags.module';
import { StarsModule } from './shared/components/stars/stars.module';
import { RatesModule } from './shared/components/stars/rates.module';
import { ValidationModule } from './shared/validators/validation.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
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

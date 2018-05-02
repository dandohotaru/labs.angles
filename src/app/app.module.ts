import { FieldModule } from './fields/field.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TagsModule } from './tags/tags.module';
import { StarsModule } from './stars/stars.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TagsModule,
    FieldModule,
    StarsModule,
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

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MarkdownModule } from '../shared/components/markdown/markdown.module';
import { FieldModule } from '../shared/components/fields/field.module';
import { TagsModule } from '../shared/components/tags/tags.module';
import { StarsModule } from '../shared/components/stars/stars.module';
import { RatesModule } from '../shared/components/stars/rates.module';
import { ValidationModule } from '../shared/validators/validation.module';

import { TempComponent } from './temp.component';

const routes: Routes = [
  { path: 'temp', component: TempComponent },
]; 

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
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
    TempComponent,
  ],
  exports:[
    TempComponent
  ],
  providers: [
  ],
})
export class TempModule { }



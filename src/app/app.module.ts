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
import { HeroesModule } from './heroes/heroes.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
]; 

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ValidationModule,
    MarkdownModule,
    FieldModule,
    TagsModule,
    StarsModule,
    RatesModule,
    HeroesModule,
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



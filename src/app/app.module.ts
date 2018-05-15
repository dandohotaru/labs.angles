import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HeroesModule } from './heroes/heroes.module';
import { TempModule } from './temps/temp.module';

const routes: Routes = [
  { path: '', redirectTo: '/temp', pathMatch: 'full' },
]; 

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    TempModule,
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



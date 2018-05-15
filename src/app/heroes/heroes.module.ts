import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  { path: 'heroes', component: ListComponent },
  { path: 'heroes/:id', component: DetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ListComponent,
    DetailsComponent,
  ],
  providers: [
  ]
})
export class HeroesModule { }


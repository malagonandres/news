import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component'
import { RootComponent } from './root.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './../main/main.module#MainModule'
  },
  {
    path: 'page',
    loadChildren: './../page/page.module#PageModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RootComponent
  ]
})
export class RootModule { }

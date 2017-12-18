import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootModule } from './root/root.module';
import { RootComponent } from './root/root.component'


@NgModule({
  imports: [
    BrowserModule,
    RootModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }

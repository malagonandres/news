import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewsService } from './services/news.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [NewsService]
})
export class SharedModule { }

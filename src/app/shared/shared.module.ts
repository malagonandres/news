import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewsService } from './services/news.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PageNotFoundComponent,
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  providers: [NewsService]
})
export class SharedModule { }

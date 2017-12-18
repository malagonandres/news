import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewsService } from './services/news.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [NewsService]
})
export class SharedModule { }

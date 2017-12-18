import { INews } from './../shared/interfaces/i-news';
import { NewsService } from './../shared/services/news.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'news-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {

  news$: Observable<Array<INews>>;
  newsClicked: string;

  constructor(
    private _newsService: NewsService
  ) { }

  ngOnInit() {
    this.news$ = this._newsService.getJsonNews();
    this.news$.subscribe(
      d => console.log('news', d)
    );
  }

}

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
  news: INews;
  newsClicked: number | string;

  constructor(
    private _newsService: NewsService
  ) { }

  ngOnInit() {
    this.news = {id: '', title: '', image: '', content: ''};
    this.news$ = this._newsService.getJsonNews();
    this.news$.subscribe(
      d => console.log('news', d)
    );
  }
  selectedNews( news: INews) {
    this.news = news;
  }

}

import { Component, OnInit } from '@angular/core';

import { INews } from './../shared/interfaces/i-news';
import { NewsService } from './../shared/services/news.service';

import { Observable } from 'rxjs/Observable';
import { BounceInUp, HeaderAnimation, CollapseDown , BounceInRightGroup } from '../shared/animations/animations';

@Component({
  selector: 'news-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl'],
  animations: [
    BounceInUp,
    HeaderAnimation,
    CollapseDown,
    BounceInRightGroup
  ]
})
export class MainComponent implements OnInit {

  news: INews;
  newsList: INews[];
  titleState: string;
  loading: boolean;

  constructor(
    private _newsService: NewsService
  ) { }

  ngOnInit() {
    this.news = {id: '', title: '', image: '', content: ''};
    this.newsList = [];
    this.titleState = 'create';
  }
  selectedNews( news: INews) {
    this.news = this.news.id === news.id ? {id: '', title: '', image: '', content: ''} : news;
    this.titleState = this.titleState === 'show' ? 'remove' : 'create';
  }
  getNews() {
    this.loading = true;
    this._newsService
      .getApiNews()
      .subscribe(
        d => {
          this.newsList = d;
          this.loading = false;
        },
        e => {
          this.loading = false;
        }
      );
  }
  animationHeaderDone(event) {
    if (this.titleState === 'remove') {
      this.titleState = 'create';
    } else if (this.titleState === 'create') {
      this.titleState = 'show';
    }
  }
}

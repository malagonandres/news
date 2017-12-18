import { NewsService } from './../shared/services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {

  constructor(
    private _newsService: NewsService
  ) { }

  ngOnInit() {
    this._newsService.getJsonNews().subscribe(
      d => console.log('news', d)
    );
  }

}

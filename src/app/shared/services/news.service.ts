import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { INews } from '../interfaces/i-news';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { environment } from '../../../environments/environment';

@Injectable()
export class NewsService {

  constructor(
    private _http: HttpClient
  ) { }

  getApiNews(): Observable<any> {
      const queryParameters = new HttpParams();
      const url = environment.baseUrl;
      const delayTime = environment.delayTime
      return this._http
        .get(url, {params: queryParameters} )
        .delay(delayTime);
  }
}

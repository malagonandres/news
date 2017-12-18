import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { INews } from '../interfaces/i-news';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class NewsService {

  constructor(
    private _http: HttpClient
  ) { }

  getJsonNews(): Observable<any> {
    return this._http.get('../../assets/news_mock.json');
    // this.http.get('https://api.github.com/users/seeschweiler').subscribe( d => console.log('data', d) );
  }
  getApiNews(): Observable<any> {
      // Request query parameters
      const queryParameters = new HttpParams();
      // if (query.offset !== undefined) queryParameters = queryParameters.append('offset', <any>query.offset);
      // if (query.count !== undefined) queryParameters = queryParameters.append('count', <any>query.count);
      // if (query.filter !== undefined) queryParameters = queryParameters.append('filter', <any>query.filter);
      const url = environment.baseUrl + '/api/TipoAeronave';

      return this._http.get(url, {params: queryParameters} );
  }
}

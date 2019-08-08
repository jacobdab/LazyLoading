import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SeriesList} from '../models/series-list';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
  }

  getSeriesList(): Observable<SeriesList[]> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json').set('Content-type', 'application/json');

    return this.http.post<SeriesList[]>('https://b2c-www.redefine.pl/rpc/navigation/', {
      id: 1,
      jsonrpc: 2.0,
      method: 'getCategoryContentWithFlatNavigation',
      params: {ua: 'www_iplatv/12345 ' + navigator.userAgent, catid: 829, limit: 300, offset: 0}
    }, {headers});
  }
}



import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Data } from './data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataRetrivalService {

  _dataUrl: string = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Data[]> {
    return this.http.get<Data[]>(this._dataUrl)
        
        .catch(this.handleError);
}
private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
}
}

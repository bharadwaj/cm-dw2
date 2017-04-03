import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { DataJson }        from './json';

//A Skeleton HTTP implementations to process general CRUD requests from an API.
//Based on the Angular2 tutorial.


@Injectable()
export class AppService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/v1/url';  // URL to web api

  constructor(private http: Http) { }

  getJson(): Promise<DataJson[]> {
    return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response.json().data as DataJson[])
               .catch(this.handleError);
  }


  getJsonById(id: number): Promise<DataJson> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as DataJson)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<DataJson> {
    return this.http
      .post(this.apiUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as DataJson)
      .catch(this.handleError);
  }

  update(json: DataJson): Promise<DataJson> {
    const url = `${this.apiUrl}/${json.id}`;
    return this.http
      .put(url, JSON.stringify(json), {headers: this.headers})
      .toPromise()
      .then(() => json)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
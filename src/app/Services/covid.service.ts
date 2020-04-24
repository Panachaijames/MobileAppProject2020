import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient:HttpClient) { }

  GetCovid19Data():Observable<any>
  {
    return this.httpClient.get('https://api.covid19api.com/summary');
  }

  GetSearchData(name:string):Observable<any>
  {
    return this.httpClient.get('https://api.covid19api.com/country/'+name);
  }
}

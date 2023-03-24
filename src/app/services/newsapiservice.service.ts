import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private httpClient:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1dfd1e57a3ff4a9085d0bf892a5cd922";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1dfd1e57a3ff4a9085d0bf892a5cd922";

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1dfd1e57a3ff4a9085d0bf892a5cd922";

  topHeading():Observable<any>{
    return this.httpClient.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this.httpClient.get(this.techApiUrl);
  }

  businessNews():Observable<any>{
    return this.httpClient.get(this.businessApiUrl);
  }

}

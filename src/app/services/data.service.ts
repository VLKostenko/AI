import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = AppConfig.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public register(user): any {
    return this.httpClient.get(this.apiUrl + '', user);
  }

}

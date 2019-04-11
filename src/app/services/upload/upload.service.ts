import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';

// Api URL
import { AppConfig } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

	private apiUrl: string = AppConfig.apiUrl;

  constructor(private http: HttpClient) { }

  public upload(data, userId): any {
    return this.http.post<any>(this.apiUrl + '/v1/leads/from_csv', data, {
      reportProgress: true,
      observe: 'events'
    })
    .pipe(map((event) => {
      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return {
            status: 'progress',
            message: progress
          };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
        }
      })
    );
  }
}

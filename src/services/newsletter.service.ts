import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { apis } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  baseUrl: string = apis.baseUrl
  constructor(
    public http: HttpClient,
  ) {
  }

  subscribe(data: any): Observable<any> {
    const url = `${this.baseUrl}/newsletter-signup`

    return this.http.post<any>(url, data)
  }
}

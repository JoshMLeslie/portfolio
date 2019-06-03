import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailToSmsService {

  constructor(private http: HttpClient) { }

  sendLink(options: {[attr: string]: string}): Observable<boolean> {
    // it's okay(?) because the service only allows emails from a site-whitelist

    const req = new HttpRequest('POST',
      'https://api.emailjs.com/api/v1.0/email/send'
      , {
        service_id: 'default_service',
        template_id: 'portfolio_basic',
        user_id: 'user_oVHGQDxodSVGXjGoGilkn',
        template_params: options
      }, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', })
        , responseType: 'text' // needed because of something to do with the way the POST is coming back
      }
    );
        
    return this.http.request(req).pipe(
      filter(res => res instanceof HttpResponse)
      , map((res: HttpResponse<any>) => res.status === 200));
  }

}

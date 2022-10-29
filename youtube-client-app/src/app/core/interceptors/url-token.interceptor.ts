import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment';

@Injectable()
export default class UrlTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      url: environment.baseUrl + request.url,
      setParams: {
        key: environment.apiKey,
      },
    });
    return next.handle(newReq);
  }
}

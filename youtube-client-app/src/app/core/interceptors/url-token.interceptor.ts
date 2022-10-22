import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from 'src/app/shared/config/app.config';

@Injectable()
export default class UrlTokenInterceptor implements HttpInterceptor {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      url: this.appConfig.baseUrl + request.url,
      setParams: {
        key: this.appConfig.apiKey,
      },
    });
    return next.handle(newReq);
  }
}

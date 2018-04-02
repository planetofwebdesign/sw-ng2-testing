import { Observable } from 'rxjs/Observable';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class InterceptedHttpService implements HttpInterceptor {

  authToken = 'eyyyyyyyyyyyyyyyyy!!!!!!';
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const request = req.clone({ setHeaders: { Authorization: `Bearer ${this.authToken}` } });
    return next.handle(request);

  }
}


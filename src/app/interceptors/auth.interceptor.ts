import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { concatMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request?.url || (/^http/.test(request.url) && request.url.endsWith('token'))) {
      return next.handle(request);
    }

    return this.authService.token.pipe(
      concatMap(token => {
        request = request.clone({
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        });
        return next.handle(request);
      })
    );
  }
}

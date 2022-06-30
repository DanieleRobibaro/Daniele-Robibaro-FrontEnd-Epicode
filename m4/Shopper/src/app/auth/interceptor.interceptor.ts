import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token:string = this.authService.getToken();

    if(token){
      var newReq = request.clone({
        headers: request.headers.append('Authorization','Bearer '+ token)
      })
    }else{
      var newReq = request
    }
    return next.handle(newReq);

  }
}

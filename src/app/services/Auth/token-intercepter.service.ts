import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { TokenResponse } from 'src/app/models/comman/comman.model';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class TokenIntercepterService implements HttpInterceptor {
  tokenResp: TokenResponse = { token: '', refreshToken: '' };
  constructor(private inject: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(AuthServiceService);
    let authReq = req;
    authReq = this.AddTokenHeader(req, authservice.GetToken());
    return next.handle(authReq).pipe(
      catchError((errorData) => {
        if (errorData.status === 401) {
          /// logout
          /// refresh token
          //authservice.LogOut();
          return this.HandleRefreshToken(req, next);
        }
        return throwError(errorData);
      })
    );
  }

  AddTokenHeader(req: HttpRequest<any>, token: any) {
    return req.clone({
      headers: req.headers.set('Authorization', 'bearer ' + token),
    });
  }

  HandleRefreshToken(req: HttpRequest<any>, next: HttpHandler) {
    let authservice = this.inject.get(AuthServiceService);
    this.tokenResp.refreshToken = localStorage.getItem('refreshToken');
    this.tokenResp.token = localStorage.getItem('token');
    return authservice.GenerateRefreshToken(this.tokenResp).pipe(
      switchMap((data: any) => {
        console.log(data);
        console.log(data.respMsg);
        authservice.SaveToken(data);
        return next.handle(this.AddTokenHeader(req, data.respObj));
      }),
      catchError((errorData) => {
        authservice.LogOut();
        return throwError(errorData);
      })
    );
  }
}

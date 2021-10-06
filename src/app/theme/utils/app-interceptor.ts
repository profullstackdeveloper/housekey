import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor() {}
  
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // console.log(`Request for ${req.urlWithParams} started...`);

        req = req.clone({
          setHeaders: {
            // 'Content-Type' : 'application/json; charset=utf-8',
            // 'Accept'       : 'application/json',
            'Authorization': `Bearer a444b246611d08fc4cc143a8f0fc17f7702bdf2b`,
          },
        })

        return next.handle(req).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // console.log(`Request for ${req.urlWithParams} completed...`);
            }
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            const started = Date.now();            
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
           // debugger;
            return throwError(error);
          })
        );

    }  
}
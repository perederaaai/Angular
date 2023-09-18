import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      headers: req.headers.append('Add-token', 'Random Value')
    })
    console.log(cloned, 'interceptor')
    return next.handle(cloned).pipe(
      tap(event=>{
        if (event.type === HttpEventType.Response){
          console.log('Event type is true', event)
        }
      })
    )
  }
}

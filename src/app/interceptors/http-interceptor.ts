import { AuthService } from './../services/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  
    constructor(private readonly authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userName = this.authService.getUsername();
    const password = this.authService.getPassword();

    req = req.clone({
    setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${userName}:${password}`)
    }
    });

    return next.handle(req);
  }
}

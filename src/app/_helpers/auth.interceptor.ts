import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

import { AuthenticationService } from "../_services/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor( private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next:HttpHandler): Observable<any> {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${currentUser.authdata}`
                }
            });
        }
        return next.handle(request);
    }



}




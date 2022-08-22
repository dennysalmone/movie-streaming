import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { SharedModule } from "../shared.module";

@Injectable({
    providedIn: SharedModule
})

export class AuthGuard implements CanActivate {

    constructor (private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (this.auth.isAuthenticated()) {
            return of(true);
        } else {
            // this.auth.logout();
            return of(false);
        }
    }
}
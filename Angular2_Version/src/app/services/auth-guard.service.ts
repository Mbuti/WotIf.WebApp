import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

// Services
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.auth.loggedIn()) {
            return true;
        }

        this.router.navigate(["/login"]);
        return false;
    }

}
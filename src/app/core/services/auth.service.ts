import { Injectable } from '@angular/core';
import { tokenNotExpired } from "angular2-jwt";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

// Models
import { LoginApiModel } from '../../models';

// Services
import { AuthProxyService } from './auth-proxy.service';

@Injectable()
export class AuthService {
  private timer: Observable<number>;
  private timerSubscription: Subscription;

  constructor(private authProxy: AuthProxyService) { }

  loggedIn(): boolean {
    if (tokenNotExpired("id_token")) {
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  }

  login(loginModel: LoginApiModel): Observable<any> {
    return this.authProxy.getToken(loginModel);
  }

  startTokenRefreshTimer(refreshInterval: number) {
    let adjustedRefreshInterval = refreshInterval / 100 * 80 * 1000;
    this.timer = Observable.timer(adjustedRefreshInterval, adjustedRefreshInterval);
    let timerSubscription = this.timer.subscribe(t => {
      try {
        this.authProxy.refreshToken().subscribe((result) => {
          localStorage.setItem("id_token", result.access_token);
          localStorage.setItem("refreshToken", result.refresh_token);
        })
      } catch (error) {
        this.stopRefreshTimer();
        console.error(error);
      }
    });
  }

  stopRefreshTimer() {
    this.timerSubscription.unsubscribe();
  }

  logout() {
    this.stopRefreshTimer();
    localStorage.clear();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    //come back latter to see what json.parse is supposed to do
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(
        `${environment.apiUrl}/users/authenticate`,
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .pipe(
        map((user) => {
          this.currentUserSubject.next(user);
          this.startRefreshTokenTimer();
          return user;
        })
      );
  }
  logout() {
    this.http
      .post<any>(
        `${environment.apiUrl}/users/revoke-token`,
        {},
        { withCredentials: true }
      )
      .subscribe();
    this.stopRefreshTokenTimer();
    this.currentUserSubject.next(null);
  }

  register(user: User) {
    return this.http.post<any>(`${environment.apiUrl}/users/register`, user, {
      withCredentials: true,
    });
  }

  refreshToken() {
    return this.http
      .post<any>(
        `${environment.apiUrl}/users/refresh-token`,
        {},
        { withCredentials: true }
      )
      .pipe(
        map((user) => {
          this.currentUserSubject.next(user);
          this.startRefreshTokenTimer();
          return user;
        })
      );
  }

  private refreshTokenTimeout!: any;

  startRefreshTokenTimer() {
    const token = JSON.parse(atob(this.currentUserValue.token.split('.')[1]));
    const expires = new Date(token.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(
      () => this.refreshToken().subscribe(),
      timeout
    );
  }

  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}

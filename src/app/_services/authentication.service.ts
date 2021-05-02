import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public currentUserSubject: any;
  public currentUser: any;

  constructor(private http: HttpClient) {
    //come back latter to see what json.parse is supposed to do
    this.currentUserSubject = new BehaviorSubject(
      localStorage.getItem('currentUser')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}/users/authenticate`, {
        username,
        password,
      })
      .pipe();
  }
  logout() {
    //remove i=user from local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }
}

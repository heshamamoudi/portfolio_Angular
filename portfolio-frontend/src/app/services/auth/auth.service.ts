import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient , private router: Router) { }
  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${process.env['URL']}/signin`, {
      username,
      password,
    });
  }

  public setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    if (authResult.idToken !== undefined) {
      // this.isloggedin$.next(true);
      
      sessionStorage.setItem('id_token', authResult.idToken);
      sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
      alert('user logged in');
      this.router.navigateByUrl('/');
    }
  }

  public logout(): void {
    // this.isloggedin$.next(false);
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
    this.router.navigateByUrl('/signin');
  }

  public isLoggedIn(): boolean {
    if (
      moment().isBefore(this.getExpiration()) &&
      this.getExpiration() !== null
    ){ return true;}
     

    return false;
  }
  // get loginstatus() {
  //   // return this.isloggedin$.asObservable();
  // }
  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    const expiration: string = sessionStorage.getItem('expires_at') as string;
    const expiresAt: string = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public getUser(): Observable<User> {
    return this.http.get<User>('http://localhost:5000/users/20');
  }
}

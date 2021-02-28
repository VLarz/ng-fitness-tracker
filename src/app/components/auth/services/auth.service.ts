import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor(
    private router: Router
  ) { }

  registerUser(authData: AuthData): void {
    this.user  = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData): void {
    this.user  = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully();
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuthenticated(): boolean {
    return this.user != null;
  }

  private authSuccessfully(): void {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor() { }

  registerUser(authData: AuthData): void {
    this.user  = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
  }

  login(authData: AuthData): void {
    this.user  = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
  }

  logout(): void {
    this.user = null;
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuthenticated(): boolean {
    return this.user != null;
  }
}

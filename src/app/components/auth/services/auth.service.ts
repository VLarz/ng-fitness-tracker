import { Injectable } from '@angular/core';
import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;

  constructor() { }

  registerUser(authData: AuthData): void {
    this.user  = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
  }

  login(authData: AuthData): void {
    this.user  = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
  }

  logout(): void {
    this.user = null;
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuthenticated(): void {
    return this.user != null;
  }
}

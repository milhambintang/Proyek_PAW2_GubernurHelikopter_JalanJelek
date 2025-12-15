import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  // BehaviorSubject untuk menyimpan user yang sedang login
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Cek token dari localStorage saat aplikasi dimulai
    const token = localStorage.getItem('token');
    if (token) {
      // Di sini kamu bisa decode token dan set user (opsional)
    }
  }

  // Register
  register(username: string, email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/register`, { username, email, password });
  }

  // Login
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password });
  }

  // Logout
  logout(): void {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  // Simpan token di localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Ambil token dari localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Cek apakah user sudah login
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Set user ke BehaviorSubject
  setCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }
}
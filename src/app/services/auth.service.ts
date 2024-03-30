import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username!: string;
  private password!: string;
  private isAuthenticated = false;
  private apiUrl = environment.apiUrl;
  
  constructor(private readonly httpClient: HttpClient) { }

  setUsername(username: string) {
    this.username = username;
  }

  setPassword(password: string) {
    this.password = password;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    try {
      const response = await this.httpClient.post<boolean>(`${this.apiUrl}/auth`, {'userName': username, 'password': password}).toPromise();
      
      if (response) {
        this.setUsername(username);
        this.setPassword(password);
        this.isAuthenticated = true;
        return true;
      } else {
        this.isAuthenticated = false;
        return false;
      }
    } catch (error) {
      console.error('Error occurred during validating credentials:', error);
      this.isAuthenticated = false;
      return false;
    }
  }

  hasAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}

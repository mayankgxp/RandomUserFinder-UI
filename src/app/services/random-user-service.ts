import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RandomUser } from '../models/random-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  private apiUrl = environment.apiUrl;
    
  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<RandomUser> {
    return this.http.get<RandomUser>(`${this.apiUrl}/user`);
  }
}

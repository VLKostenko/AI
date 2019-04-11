import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

// User Interfaces
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = AppConfig.apiUrl;

  constructor(private http: HttpClient) { }

  public getById(id: number) {
      return this.http.get(this.apiUrl + '/v1/users/:userId' + id);
  }

  public getAllUser(users) {
    return this.http.get(this.apiUrl + '/v1/users' + users);
}

  public registerUser(user: User) {
      return this.http.post(this.apiUrl + '/v1/auth/register', user);
  }

  public updateUser(user: User, id: number) {
      return this.http.patch(this.apiUrl + '/v1/users/:userId' + id, user);
  }

  public deleteUser(id: number) {
      return this.http.delete(this.apiUrl + '/v1/users/:userId' + id);
  }

}

import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { Role } from '../enums/role';
import { Permission } from '../enums/permission';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }
  private currentUser: User;
  
  get(form: { userName: string, password: string, chatId: string }): Observable<User> {
    // this.currentUser = {
    //   id: "ccc",
    //   name: "יוסי",
    //   role: Role.judge,
    //   permission: Permission.other
    // };

    // return of({
    //   id: "ccc",
    //   name: "יוסי",
    //   role: Role.judge,
    //   permission: Permission.other
    // });
    return this.httpClient.get<User>(`${this.baseUrl}/Login/${form.userName}/${form.password}/${form.chatId}`);
  }
  getCurrentUser(): User {
    return this.currentUser;
  }
  setCurrentUser(user:User): void {
     this.currentUser = user;
  }
}

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
export class ParticipantsService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  get(chatId: string): Observable<User[]> {
    return of([{
      id: "aaa",
      name: "יוסי לוי",
      role: Role.judge,
      permission: Permission.admin
    }, {
      id: "bbbb",
      name: "ישראל כהן",
      role: Role.represents,
      permission: Permission.other
    }, {
      id: "ccc",
      name: "רפאל רפאלי",
      role: Role.trapping,
      permission: Permission.other
    }]);
    // return this.httpClient.get<User[]>(`${this.baseUrl}/Participants/${chatId}`);
  }
}

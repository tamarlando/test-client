import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';
import { Permission } from '../enums/permission';
import { LoginService } from '../services/login.service';

@Pipe({
  name: 'permission'
})
export class PermissionPipe implements PipeTransform {

  constructor(private loginService: LoginService) { }

  transform(value: User): boolean {
    var currentUser = this.loginService.getCurrentUser();
    return currentUser?.id === value.id || currentUser?.permission === Permission.admin;
  }

}

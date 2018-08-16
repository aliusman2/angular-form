import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  authenticateUser(user: User): boolean {
    let found = false;
    let foundUser: User;

    USERS.forEach(function(savedUser) {
      if (user.email === savedUser.email) {
        found = true;
        foundUser = savedUser;
      }
    });

    if (!found) {
      return false;
    }

    const authenticated = user.password === foundUser.password ? true : false;
    return authenticated;
  }
}

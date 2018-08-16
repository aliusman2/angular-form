import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  authenticated: boolean;
  state: string;

  model = new User(
    '',
    ''
  );

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    this.authenticated = this.userService.authenticateUser(this.model);
  }

}

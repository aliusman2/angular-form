import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  isRtl = false;

  model = new User(
    '',
    ''
  );

  constructor(
    private userService: UserService,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'ur']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ur/) ? browserLang : 'en');

    if (browserLang === 'ur') {
      this.isRtl = true;
    }
  }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    this.authenticated = this.userService.authenticateUser(this.model);
  }

  setEnglish() {
    this.translate.use('en');
    this.isRtl = false;
  }

  setUrdu() {
    this.translate.use('ur');
    this.isRtl = true;
  }

  onTranslate() {
    this.translate.get('HELLO', { value: 'world' }).subscribe((res: string) => {
      console.log(res);
      // => 'hello world'
    });
  }

}

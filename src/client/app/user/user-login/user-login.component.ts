import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '#Alert/alert.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  username: string;
  password: string;
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.userService.logout();
  }

  login(): void {
    this.alertService.clear();
    this.loading = true;
    this.userService.login(this.username, this.password).subscribe(
      (next) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.loading = false;
        this.alertService.error(error.error.message);
      }
    );
  }
}

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, RouterModule],
})
export class LoginPageComponent {
  protected errorMsg: string;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    this.errorMsg = '';
  }

  protected onFormSubmit(username: string, password: string): void {
    if (this.userService.users.length < 1) {
      this.errorMsg = 'The entered user does not exist';
    } else {
      for (const registeredUser of this.userService.users) {
        if (
          registeredUser.username === username &&
          registeredUser.password === password
        ) {
          this.router.navigate(['home/:username/:password']);
        } else {
          this.errorMsg = 'The entered credentials are invalid';
        }
      }
    }
  }

  protected hideErrorMsg(): void {
    this.errorMsg = '';
  }
}

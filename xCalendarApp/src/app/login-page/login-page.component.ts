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
  imports: [FormsModule, ReactiveFormsModule, NgIf, RouterModule]
})
export class LoginPageComponent {
  protected errorMsg: string;
  protected userData!: any[];

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.errorMsg = '';
  }

  protected onFormSubmit(username: string, password: string): void {
    this.userService.getUserByName(username).subscribe(({ data }: any) => {
      this.userData = data.user;

      if (this.userData.length < 1) {
        this.errorMsg = 'The entered user does not exist';
      } else if (this.userData[0].password === password) {
        this.router.navigate(['/home', username, password]);
      } else {
        this.errorMsg = 'The entered credentials are invalid';
      }
    });
  }

  protected hideErrorMsg(): void {
    this.errorMsg = '';
  }
}

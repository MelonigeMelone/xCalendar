/* eslint-disable class-methods-use-this */
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, RouterModule, NgClass],
})
export class RegisterPageComponent {
  protected usernameHasError: boolean;

  protected passwordHasError: boolean;

  protected errorMsg: string;

  protected emailHasError: boolean;

  protected phoneHasError: boolean;

  private emailPattern: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  private numberPattern: RegExp = /^\d+$/;

  constructor(private userService: UserService) {
    this.usernameHasError = false;
    this.passwordHasError = false;
    this.emailHasError = false;
    this.phoneHasError = false;
    this.errorMsg = '';
  }

  protected onFormSubmit(
    username: string,
    email: string,
    phone: string,
    password: string,
    confirmedPassword: string,
  ): void {
    if (
      !this.checkForEmptyFields(username, password) &&
      this.validateEmail(email) &&
      this.validatePhone(phone) &&
      this.validatePassword(password) &&
      this.checkPasswordEquality(password, confirmedPassword)
    ) {
      this.errorMsg = '';
      this.userService.addUser(new User(username, email, phone, password));
    }
  }

  private checkForEmptyFields(username: string, password: string): boolean {
    if (username === '' && password === '') {
      this.errorMsg =
        'Fields marked by the * Symbol are necessary and cannot be empty.';
      this.usernameHasError = true;
      this.passwordHasError = true;
      return true;
    }
    if (username === '') {
      this.errorMsg =
        'Fields marked by the * Symbol are necessary and cannot be empty.';
      this.usernameHasError = true;
      return true;
    }
    if (password === '') {
      this.errorMsg =
        'Fields marked by the * Symbol are necessary and cannot be empty.';
      this.passwordHasError = true;
      return true;
    }
    return false;
  }

  private validatePhone(phone: string): boolean {
    if (phone !== '') {
      if (this.numberPattern.test(phone)) {
        return true;
      }
      this.errorMsg =
        'The entered phone number is invalid. Please take a look.';
      this.phoneHasError = true;
      return false;
    }
    return true;
  }

  private validateEmail(email: string): boolean {
    if (email === '' || this.emailPattern.test(email)) {
      return true;
    }
    this.emailHasError = true;
    this.errorMsg = 'The entered E-Mail is invalid. Please check your input.';
    return false;
  }

  private validatePassword(password: string): boolean {
    if (password.length >= 5) {
      return true;
    }
    this.passwordHasError = true;
    this.errorMsg = 'The password has to have at least five characters';
    return false;
  }

  private checkPasswordEquality(
    password: string,
    confirmedPassword: string,
  ): boolean {
    if (password === confirmedPassword) {
      return true;
    }
    this.passwordHasError = true;
    this.errorMsg =
      'The entered passwords are not equal. Please check your input.';
    return false;
  }

  protected resetErrorStateOfUsername(): void {
    this.usernameHasError = false;
  }

  protected resetErrorStateOfPassword(): void {
    this.passwordHasError = false;
  }

  protected resetErrorStateOfEmail(): void {
    this.emailHasError = false;
  }

  protected resetErrorStateOfPhone(): void {
    this.phoneHasError = false;
  }
}

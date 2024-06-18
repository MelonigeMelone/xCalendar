import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { NgIf } from "@angular/common";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatMenuModule } from "@angular/material/menu";
import { RouterModule, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    RouterModule,
  ],
})
export class LoginPageComponent {
  userData: any;
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  hide = true;

  onLogInWith(userMailAddress: string, userPassword: string) {
    this.userService.getUserByEmail(userMailAddress).subscribe(({ data }) => {
      this.userData = data;
    });
    if (this.userData.password == userPassword) {
      if (!this.emailFormControl.errors) {
        this.router.navigate(["/home", userMailAddress, userPassword]);
      }
    }
  }
}

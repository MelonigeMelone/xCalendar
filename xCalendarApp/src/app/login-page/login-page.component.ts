import { Component, OnInit } from "@angular/core";
import { NgIf } from "@angular/common";

import { RouterModule, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
  standalone: true,
  imports: [NgIf, RouterModule],
})
export class LoginPageComponent {
  userData: any;

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  hide = true;

  onLogInWith(userMailAddress: string, userPassword: string) {
    this.userService.getUserByEmail(userMailAddress).subscribe(({ data }) => {
      this.userData = data;
    });
    if (this.userData.password == userPassword) {
      this.router.navigate(["/home", userMailAddress, userPassword]);
    }
  }
}

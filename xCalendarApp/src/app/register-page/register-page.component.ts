import { Component } from "@angular/core";
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { NgIf } from "@angular/common";

import { RouterModule } from "@angular/router";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, RouterModule],
})
export class RegisterPageComponent {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  usernameFormControl = new FormControl("", [Validators.required]);

  hide = true;
}

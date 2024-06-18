import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule, Router } from "@angular/router";

import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import gql from "graphql-tag";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  // @ts-ignore
  user$: Observable<User>;

  userMailAddress = "null";

  userPassword = "null";

  userData: any[] = [];

  loading = true;

  error: any;

  constructor(private router: Router) {}

  onClickHome() {
    this.router.navigate(["/home", this.userMailAddress, this.userPassword]);
  }

  onClickProfile() {
    this.router.navigate(["/profile", this.userMailAddress, this.userPassword]);
  }
}

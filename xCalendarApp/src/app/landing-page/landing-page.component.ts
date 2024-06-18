import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-landing-page",
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidenavComponent, FooterComponent],
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  userMailAddress = "null";

  userPassword = "null";

  date = "null";

  constructor() {
    this.userMailAddress = String(
      this.route.snapshot.params[this.userMailAddress],
    );
    this.userPassword = String(this.route.snapshot.params[this.userPassword]);
    this.date = new Date().toLocaleDateString();
  }
}

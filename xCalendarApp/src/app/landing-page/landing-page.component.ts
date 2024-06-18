import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  userMailAddress = 'null';

  userPassword = 'null';

  date = 'null';

  constructor() {
    // this.userMailAddress = String(this.route.snapshot.params.userMailAddress);
    // this.userPassword = String(this.route.snapshot.params.userPassword);
    this.date = new Date().toLocaleDateString();
  }
}

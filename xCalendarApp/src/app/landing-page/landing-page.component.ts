/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  protected userMailAddress = '';

  protected date = '';

  constructor() {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.date = new Date().toLocaleDateString();
  }
}

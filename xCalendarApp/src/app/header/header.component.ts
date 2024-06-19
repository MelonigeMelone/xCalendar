/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  protected userMailAddress: string = '';

  protected userPassword: string = '';

  constructor(private router: Router) {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.userPassword = String(this.route.snapshot.params['userPassword']);
  }

  onClickHome() {
    this.router.navigate(['/home', this.userMailAddress, this.userPassword]);
  }

  onClickProfile() {
    this.router.navigate(['/profile', this.userMailAddress, this.userPassword]);
  }
}

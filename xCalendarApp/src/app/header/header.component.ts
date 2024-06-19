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

  protected userName: string = '';

  constructor(private router: Router) {
    this.userName = String(this.route.snapshot.params['userName']);
  }

  onClickHome() {
    this.router.navigate(['/home', this.userName]);
  }

  onClickProfile() {
    this.router.navigate(['profile', this.userName]);
  }
}

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

  userMailAddress = 'null';

  userPassword = 'null';

  constructor(private router: Router) {
    this.userMailAddress = String(this.route.snapshot.params['userName']);
  }

  onClickHome() {
    this.router.navigate(['/home', this.userMailAddress]);
  }

  onClickProfile() {
    this.router.navigate(['/profile', this.userMailAddress]);
  }
}

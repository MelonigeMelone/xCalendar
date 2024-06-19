/* eslint-disable dot-notation */
/* eslint-disable prettier/prettier */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  protected username: string = '';

  protected user: User |undefined;

  constructor(private userService: UserService, private router: Router) {
    this.username = String(this.route.snapshot.params['userMailAddress']);
    //this.user = this.getUserInformation();
  }

  private getUserInformation(): User {
    for (const user of this.userService.users) {
      if (this.username === user.username) {
        return user;
      }
    }
    throw new Error;
  }

  protected logout(): void {
    this.router.navigate(['/welcome']);
  }
}

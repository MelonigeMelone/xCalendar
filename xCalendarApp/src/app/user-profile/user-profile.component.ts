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

  protected userData: User | undefined;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.username = String(this.route.snapshot.params['userName']);
    this.getUserInformation();
  }

  private getUserInformation() {
    this.userService.getUserByName(this.username).subscribe(({ data }: any) => {
      this.userData = data.user;
    });
    // throw new Error();
  }

  protected logout(): void {
    this.router.navigate(['/welcome']);
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent 
{
  route: ActivatedRoute = inject(ActivatedRoute); 
  userMailAddress = "null";
  userPassword = "null";

  constructor()
  {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.userPassword = String(this.route.snapshot.params['userPassword']); 
  }
}

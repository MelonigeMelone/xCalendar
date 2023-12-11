import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent 
{ 
  route: ActivatedRoute = inject(ActivatedRoute); 
  userMailAddress = "null";
  userPassword = "null";

  constructor(private router : Router) 
  {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.userPassword = String(this.route.snapshot.params['userPassword']); 
  }

  onClickHome()
  {
    this.router.navigate(['/home', this.userMailAddress, this.userPassword]);
  }

  onClickProfile()
  {
    this.router.navigate(['/profile', this.userMailAddress, this.userPassword]); 
  }

}

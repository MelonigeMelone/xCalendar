import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, HeaderComponent, SidenavComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'], 
})
export class LandingPageComponent 
{
  route: ActivatedRoute = inject(ActivatedRoute); 
  userMailAddress = "null";
  userPassword = "null";
  date = "null";

  constructor()
  {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.userPassword = String(this.route.snapshot.params['userPassword']); 
    this.date = new Date().toLocaleDateString();
  }
}

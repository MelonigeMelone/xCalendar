import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute); 
  userMailAddress = "null"; 
  userPassword = "null"; 

  constructor()
  {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']); 
    this.userPassword = String(this.route.snapshot.params['userPassword']); 
  } 
}

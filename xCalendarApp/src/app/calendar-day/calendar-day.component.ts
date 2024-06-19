import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-calendar-day',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf
  ],
  templateUrl: './calendar-day.component.html',
  styleUrl: './calendar-day.component.scss'
})
export class CalendarDayComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  userMailAddress = "null";
  userPassword = "null";
  year: number = -1;
  month: number = -1;
  day: number = -1;

  constructor() {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.userPassword = String(this.route.snapshot.params['userPassword']);
    this.year = Number(this.route.snapshot.params['year']);
    this.month = Number(this.route.snapshot.params['month']);
    this.day = Number(this.route.snapshot.params['day']);
  }

  navigateToAppointmentInfo(): void {
    this.router.navigate(['appointment-info', this.userMailAddress, this.userPassword])
  }

}

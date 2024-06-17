import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from "@angular/common";
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        NgForOf
    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  // @ts-ignore
  currentMonth: moment.Moment;

  constructor() { }

  ngOnInit(): void {
    this.currentMonth = moment(); // Initialize with current month
  }

  nextMonth() {
    this.currentMonth.add(1, 'month');
  }

  previousMonth() {
    this.currentMonth.subtract(1, 'month');
  }

  getWeekdays(): string[] {
    // Adjust to your locale or preference
    return moment.weekdaysShort();
  }

  getCalendar(): any[] {
    const startOfMonth = this.currentMonth.clone().startOf('month').startOf('week');
    const endOfMonth = this.currentMonth.clone().endOf('month').endOf('week');

    const calendar = [];
    let currentDay = startOfMonth.clone();

    while (currentDay.isSameOrBefore(endOfMonth, 'day')) {
      calendar.push({
        day: currentDay.clone(),
        inMonth: currentDay.isSame(this.currentMonth, 'month')
      });
      currentDay.add(1, 'day');
    }

    return calendar;
  }

}

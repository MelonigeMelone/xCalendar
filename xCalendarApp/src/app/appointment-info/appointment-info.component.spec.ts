import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentInfoComponent } from './appointment-info.component';

describe('AppointmentInfoComponent', () => {
  let component: AppointmentInfoComponent;
  let fixture: ComponentFixture<AppointmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

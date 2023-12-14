import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import gql from 'graphql-tag'

interface User {
  adress_id: number;
  birthdate: Date;
  email: string;
  id: number;
  username: string;
  adress: Adress;
}

interface Adress {
  city: string;
  housenumber: number;
  id: number;
  postcode: number;
  street: string;
}

interface Response {
  users: User[];
}

const GET_USER = gql`
  query User {
  xcalendar_User {
    address_id
    birthdate
    email
    id
    username
  }
}
`

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit
{
  route: ActivatedRoute = inject(ActivatedRoute); 
  userMailAddress = "null";
  userPassword = "null";

  users$: Observable<User[]> | undefined;

  constructor(private apollo:Apollo)
  {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.userPassword = String(this.route.snapshot.params['userPassword']); 
  }
  ngOnInit(): void {
    this.users$ = this.apollo.watchQuery<Response>({
      query: GET_USER
    }).valueChanges.pipe(map(result => result.data.users));
  }
}

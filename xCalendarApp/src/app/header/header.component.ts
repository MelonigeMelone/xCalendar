import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
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
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  userMailAddress = "null";
  userPassword = "null";

  users$: Observable<User[]> | undefined;

  constructor(private router: Router, private apollo: Apollo) {
    this.userMailAddress = String(this.route.snapshot.params['userMailAddress']);
    this.userPassword = String(this.route.snapshot.params['userPassword']);


  }
  ngOnInit(): void {
    this.users$ = this.apollo.watchQuery<Response>({
      query: GET_USER
    }).valueChanges.pipe(map(result => result.data.users));
  }

  onClickHome() {
    this.router.navigate(['/home', this.userMailAddress, this.userPassword]);
  }

  onClickProfile() {
    this.router.navigate(['/profile', this.userMailAddress, this.userPassword]);
  }

}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

interface User{
  id: string
  username: string
  email: string
  birthdate: string
  adress: Adress
}

interface Adress{
  id:string
  city:string
  postcode:number
  street: string
  housenumber: number
}

interface Response{
  user: User
}

const GET_USER = gql`
  User{
        id,
        username,
        email,
        birthdate,
        adress{
            id,
            city,
            postcode,
            street,
            housenumber
        }
    }
`;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  user$: Observable<User[]>
  userMailAddress = "null";
  userPassword = "null";
  userData: any[] = [];
  loading = true;
  error: any;

  constructor(private router: Router, private apollo: Apollo) {  }

  ngOnInit(): void {
    this.user$=this.apollo.watchQuery<Response>({
      query: GET_USER,
    }).valueChanges.pipe(result => result.data.user);
      
  }

  onClickHome() {
    this.router.navigate(['/home', this.userMailAddress, this.userPassword]);
  }

  onClickProfile() {
    this.router.navigate(['/profile', this.userMailAddress, this.userPassword]);
  }

}

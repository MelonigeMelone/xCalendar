import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import { UserService } from "../services/user.service";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {Router, RouterModule} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HttpLink, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { APOLLO_OPTIONS, Apollo, ApolloModule } from 'apollo-angular';
import { GET_USER_DATA } from '../graphql/graphql.queries';

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, MatIconModule, MatButtonModule, MatCheckboxModule, MatMenuModule, RouterModule, NgOptimizedImage,ApolloModule,],
  
})

export class LoginPageComponent{
  userData:any
emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(
    private router: Router,
    private userService: UserService,
    private apollo:Apollo
  ) {}


  


  onLogInWith(userMailAddress: string, userPassword: string) {
    this.userService.getUserByEmail(userMailAddress).subscribe(({data}:any)=>{
      this.userData=data.user;
      if (this.userData.password == userPassword) {
      this.router.navigate(["/home", userMailAddress, userPassword]);
    }
    })
  }
}

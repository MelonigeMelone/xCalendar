import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
<<<<<<< Updated upstream
=======
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, MatIconModule, MatButtonModule, MatCheckboxModule, MatMenuModule], 
})
<<<<<<< Updated upstream
export class LoginPageComponent 
{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true; 

  language: string = 'english'; 

  setLanguage(clckedButtonId:string)
  {
    this.language = clckedButtonId;
=======

export class LoginPageComponent  
{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  
  constructor (private router: Router)
  {
  }

  loginClicked(userMailAddress: string, userPassword: string)
  {
    if(userMailAddress && userPassword)
    {
      if (!this.emailFormControl.errors)
      {
        this.router.navigate(['/home', userMailAddress, userPassword]); 
      }
    } 
>>>>>>> Stashed changes
  }
}

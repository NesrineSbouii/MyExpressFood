import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  constructor(
    private readonly router: Router,
    private readonly dataservice: DataService
  ) {}
  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities
  user_register() {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login() {
    this.userlogin = true;
    this.userregister = false;
  }

  navigateToHome() {
    if (this.dataservice.isValid(this.email)) {
      this.router.navigate(['']);
    }
  }
  navigateToHomeRegister() {
    
      this.router.navigate(['']);
    
  }
}

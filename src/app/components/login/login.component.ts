import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'Hello, random-user-ui';
  loginForm!: FormGroup;
  submitted = false;
  invalidCredentials!: boolean;
  constructor(
    private readonly formBuilder: FormBuilder, 
    private readonly router: Router,
    private readonly authService: AuthService) {}

  ngOnInit() {
    ;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

 async login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    
    if (await this.authService.authenticate(this.loginForm.value.username, this.loginForm.value.password)) {
      debugger
      this.invalidCredentials = false;
      debugger;
      this.router.navigate(['/user']);
    } else {
      debugger;
     this.invalidCredentials = true;
    }
  }
}

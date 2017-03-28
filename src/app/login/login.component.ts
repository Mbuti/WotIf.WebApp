import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

// Services
import { AuthService } from '../services/auth.service';

//Models
import { LoginApiModel } from '../models/LoginApiModel';
import { LoginResponseModel } from '../models/LoginResponseModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  redirectUrl: string = "";

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.form = formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm(loginModel: LoginApiModel) {
    this.auth.login(loginModel)
      .subscribe((data) => {
        try {
          let loginResponse = new LoginResponseModel(data);
          localStorage.setItem("id_token", loginResponse.accessToken);
          localStorage.setItem("refreshToken", loginResponse.refreshToken);
          this.auth.startTokenRefreshTimer(loginResponse.expiresIn);
          if (this.redirectUrl !== "") {
            this.router.navigate([decodeURI(this.redirectUrl)]);
          } else {
            this.router.navigate(['']);
          }
        } catch (error) {
          console.error(error);
          this.router.navigate(['']);
        }
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  //init __init__
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post("http://localhost:8080/api/login", this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/'])
      }
    )
  }


}
//<app-login><\app-login>
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    bookingCode: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(6),
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9]+$")
    ]),
    name: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.required,
    ])
  })
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/mybooking']);
  }
  autoFill(){
    this.loginForm.controls['bookingCode'].setValue('PZIGZ3');
    this.loginForm.controls['name'].setValue('HESP');
  }
}

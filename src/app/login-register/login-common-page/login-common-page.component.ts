import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { auth } from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login-common-page',
  templateUrl: './login-common-page.component.html',
  styleUrls: ['./login-common-page.component.scss']
})
export class LoginCommonPageComponent implements OnInit {
  
  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  getValue( val: any){
    this.loginForm = val;
    console.warn(val);
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['']));
  }

}

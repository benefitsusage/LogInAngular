import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, Validators,} from '@angular/forms';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { from } from 'rxjs';
import { switchMap, first, mapTo, take } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm: any;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  createUser() {
    const { email, password, fullName } = this.registerForm.value;
    from(this.auth.createUserWithEmailAndPassword(email, password))
      .subscribe(() => this.router.navigate(['']), console.error);
  }

}

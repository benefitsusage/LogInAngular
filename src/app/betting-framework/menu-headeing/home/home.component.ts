import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( 
    private auth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.auth.signOut().then(() => this.router.navigate(['dashboard']));
  }

}

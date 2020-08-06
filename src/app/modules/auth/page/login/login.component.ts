import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  Login(event: Event) {
    console.log("login", event);
  }

  Registration() {
    this.router.navigate(['/registration']);
  }

}

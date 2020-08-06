import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  Registration(event: Event) {
    console.log("login", event);
  }


  Login() {
    this.router.navigate(['/login']);
  }

}

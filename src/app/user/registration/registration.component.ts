import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,RouterModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private router:Router){}

  goToLoginPage(){
    this.router.navigate(['users/login'])

  }

}

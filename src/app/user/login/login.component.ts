import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}

  goToRegisterPage(){
    this.router.navigate(['users/registration'])

  }
  resetPassword(){
    this.router.navigate(['/users/resetPassword'])
  }

  adminLogin(){
    this.router.navigate(['/admin/login'])
  }


}

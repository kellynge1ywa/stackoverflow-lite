import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent {
  constructor(private router:Router){}

  navigateToAdmin(){
    this.router.navigate(['admin/admin-dashboard'])
  }

}

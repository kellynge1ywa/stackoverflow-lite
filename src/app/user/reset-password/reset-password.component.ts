import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

}

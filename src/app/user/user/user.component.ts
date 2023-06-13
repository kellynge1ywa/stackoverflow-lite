import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

}

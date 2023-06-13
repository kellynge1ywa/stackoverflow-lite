import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NavbarComponent} from '../../navbar/navbar.component'

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,NavbarComponent, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

}

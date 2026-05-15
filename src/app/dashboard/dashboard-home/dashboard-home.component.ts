import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css',
})
export class DashboardHomeComponent implements OnInit {
  totalStaff = 0;
  totalTransfers = 0;

  ngOnInit(): void {
    // Replace with actual service calls when backend is integrated
    this.totalStaff = 0;
    this.totalTransfers = 0;
  }
}

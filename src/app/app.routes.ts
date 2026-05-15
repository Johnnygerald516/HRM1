import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Register } from './register/register';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'register', component: Register },
      { path: 'dashboard', component: DashboardHomeComponent}
    ]
  },
  { path: '**', redirectTo: 'login' },
];

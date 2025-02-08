import { Routes } from '@angular/router';
import { LoginComponent } from './AuthPages/login/login.component';
import { RegisterComponent } from './AuthPages/register/register.component';
import { OptVerifyComponent } from './AuthPages/opt-verify/opt-verify.component';
import { ForgetPassComponent } from './AuthPages/forget-pass/forget-pass.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  //   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'otp-verify', component: OptVerifyComponent },
  { path: 'forget-pass', component: ForgetPassComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

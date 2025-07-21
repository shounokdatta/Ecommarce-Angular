import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ClothsComponent } from './components/home/cloths/cloths.component';
import { MenComponent } from './components/home/men/men.component';
import { WomenComponent } from './components/home/women/women.component';
import { KidsComponent } from './components/home/kids/kids.component';
import { ElectronicsComponent } from './components/home/electronics/electronics.component';
import { HouseholdComponent } from './components/home/household/household.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // Public Routes
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Protected Routes (Require login)
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cloths', component: ClothsComponent, canActivate: [AuthGuard] },
  { path: 'men', component: MenComponent, canActivate: [AuthGuard] },
  { path: 'women', component: WomenComponent, canActivate: [AuthGuard] },
  { path: 'kids', component: KidsComponent, canActivate: [AuthGuard] },
  { path: 'electronics', component: ElectronicsComponent, canActivate: [AuthGuard] },
  { path: 'household', component: HouseholdComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  // Wildcard Route - Redirect to login if path doesn't exist
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

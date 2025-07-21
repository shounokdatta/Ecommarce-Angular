import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import your components here
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Import Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenComponent } from './components/home/men/men.component';
import { WomenComponent } from './components/home/women/women.component';
import { ClothsComponent } from './components/home/cloths/cloths.component';
import { ElectronicsComponent } from './components/home/electronics/electronics.component';
import { HouseholdComponent } from './components/home/household/household.component';
import { KidsComponent } from './components/home/kids/kids.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ProductCardComponent,
    MenComponent,
    WomenComponent,
    ClothsComponent,
    ElectronicsComponent,
    HouseholdComponent,
    KidsComponent,
    SignupComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ✅ Add this to imports
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

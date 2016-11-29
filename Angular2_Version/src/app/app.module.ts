import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

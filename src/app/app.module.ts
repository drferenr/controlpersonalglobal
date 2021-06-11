import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarheaderComponent } from './navbarheader/navbarheader.component';
import { NavbarfooterComponent } from './navbarfooter/navbarfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarheaderComponent,
    NavbarfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

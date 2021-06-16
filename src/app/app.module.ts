import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarheaderComponent } from './navbarheader/navbarheader.component';
import { NavbarfooterComponent } from './navbarfooter/navbarfooter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticatablaComponent } from './practicatabla/practicatabla.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarheaderComponent,
    NavbarfooterComponent,
    RegistroComponent,
    PracticeComponent,
    PracticatablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

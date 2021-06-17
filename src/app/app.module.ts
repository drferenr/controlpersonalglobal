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
import { Hpipe } from './@Core/pipes/hpipe';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarheaderComponent,
    NavbarfooterComponent,
    RegistroComponent,
    PracticeComponent,
    PracticatablaComponent,
    Hpipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule . forRoot ( )
  ],
  exports: [
    Hpipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

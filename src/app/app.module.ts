import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { WExperianceComponent } from './w-experiance/w-experiance.component';import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    LogoutModalComponent,
    PersonalComponent,
    EducationComponent,
    WExperianceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent, AppRoutingModule],

})
export class AppModule { }

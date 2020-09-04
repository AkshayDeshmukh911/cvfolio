import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { WExperianceComponent } from './w-experiance/w-experiance.component';
import { Route } from '@angular/compiler/src/core';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, children: [
  {path: 'personal', component: PersonalComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experiance', component: WExperianceComponent},
  ],
},

{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup/signup.component";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "signup",
    pathMatch: "full",
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}

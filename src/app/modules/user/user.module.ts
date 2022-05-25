import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user/user.component";
import { Routes, RouterModule } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: "",
    component: UserComponent,
  },
  {
    path: ":id",
    component: UserDetailsComponent,
  },
];

@NgModule({
  declarations: [UserComponent, UserDetailsComponent, AddUserComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, Ng2SearchPipeModule, ReactiveFormsModule],
})

export class UserModule { }

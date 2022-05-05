import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user/user.component";
import { Routes, RouterModule } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
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
  declarations: [UserComponent, UserDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from "./component/binding/binding.component";
import { DirectiveComponent } from './component/directive/directive.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PipeComponent } from './component/pipe/pipe.component';

const routes: Routes = [
  { path: "", redirectTo: "/binding", pathMatch: 'full' },
  { path: "binding", component: BindingComponent },
  { path: "pipes", component: PipeComponent },
  { path: "directives", component: DirectiveComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
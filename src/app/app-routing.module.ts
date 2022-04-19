import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from "./component/binding/binding.component";
import { ClassBindingComponent } from './component/binding/class-binding/class-binding.component';
import { EventBindingComponent } from './component/binding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './component/binding/property-binding/property-binding.component';
import { StyleBindingComponent } from './component/binding/style-binding/style-binding.component';
import { TextBindingComponent } from './component/binding/text-binding/text-binding.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PipeComponent } from './component/pipe/pipe.component';

const routes: Routes = [
  { path: "", redirectTo: "binding", pathMatch: 'full' },
  {
    path: "binding",
    component: BindingComponent,
    children: [
      { path: "", redirectTo: "/binding/text-binding", pathMatch: 'full' },
      { path: "text-binding", component: TextBindingComponent },
      { path: "property-binding", component: PropertyBindingComponent },
      { path: "class-binding", component: ClassBindingComponent },
      { path: "style-binding", component: StyleBindingComponent },
      { path: "event-binding", component: EventBindingComponent },
      { path: "two-way-binding", component: TextBindingComponent },
    ]
  },
  { path: "pipes", component: PipeComponent },
  { path: "directives", component: DirectiveComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
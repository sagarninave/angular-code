import { Routes } from "@angular/router";
import { BindingComponent } from "./component/binding/binding.component";
import { ClassBindingComponent } from "./component/binding/class-binding/class-binding.component";
import { EventBindingComponent } from "./component/binding/event-binding/event-binding.component";
import { PropertyBindingComponent } from "./component/binding/property-binding/property-binding.component";
import { StyleBindingComponent } from "./component/binding/style-binding/style-binding.component";
import { TextBindingComponent } from "./component/binding/text-binding/text-binding.component";
import { DirectiveComponent } from "./component/directive/directive.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { PipeComponent } from "./component/pipe/pipe.component";
import { ServiceComponent } from "./component/service/service.component";
import { TwoWayBindingComponent } from "./component/binding/two-way-binding/two-way-binding.component";
import { FormsComponent } from "./component/forms/forms.component";
import { ReactiveFormGroupComponent } from "./component/forms/reactive-form-group/reactive-form-group.component";
import { ReactiveNestedFormGroupComponent } from "./component/forms/reactive-nested-form-group/reactive-nested-form-group.component";
import { ReactiveFormBuilderComponent } from "./component/forms/reactive-form-builder/reactive-form-builder.component";
import { ReactiveNestedFormBuilderComponent } from "./component/forms/reactive-nested-form-builder/reactive-nested-form-builder.component";
import { ReactiveFormBuilderValidationComponent } from "./component/forms/reactive-form-builder-validation/reactive-form-builder-validation.component";
import { ReactiveFormGroupPopulateValuesComponent } from "./component/forms/reactive-form-group-populate-values/reactive-form-group-populate-values.component";
import { ComponentInteractionComponent } from "./component/component-interaction/component-interaction.component";
import { TemplateDrivenFormComponent } from "./component/forms/template-driven-form/template-driven-form.component";
import { TemplateDrivenFormTwoWayBindingComponent } from "./component/forms/template-driven-form-two-way-binding/template-driven-form-two-way-binding.component";
import { TemplateDrivenFormTwoWayBindingValidationComponent } from "./component/forms/template-driven-form-two-way-binding-validation/template-driven-form-two-way-binding-validation.component";
import { LifeCycleComponent } from "./component/life-cycle/life-cycle.component";
import { AuthGuard } from "src/app/Guard/auth.guard";
import { CheckGuard } from "./Guard/check.guard";
import { ReactiveFormNestedDynamicFormArrayComponent } from "./component/forms/reactive-form-nested-dynamic-form-array/reactive-form-nested-dynamic-form-array.component";

const route: Routes = [
  { path: "", redirectTo: "binding", pathMatch: "full" },
  {
    path: "binding",
    component: BindingComponent,
    children: [
      { path: "", redirectTo: "text-binding", pathMatch: "full" },
      { path: "text-binding", component: TextBindingComponent },
      { path: "property-binding", component: PropertyBindingComponent },
      { path: "class-binding", component: ClassBindingComponent },
      { path: "style-binding", component: StyleBindingComponent },
      { path: "event-binding", component: EventBindingComponent },
      { path: "two-way-binding", component: TwoWayBindingComponent },
    ],
  },
  { path: "pipes", component: PipeComponent },
  { path: "directives", component: DirectiveComponent },
  { path: "services", component: ServiceComponent },
  {
    path: "forms",
    component: FormsComponent,
    children: [
      { path: "", redirectTo: "reactive-form-group", pathMatch: "full" },
      { path: "reactive-form-group", component: ReactiveFormGroupComponent },
      {
        path: "reactive-nested-form-group",
        component: ReactiveNestedFormGroupComponent,
      },
      {
        path: "reactive-form-group-populate-values",
        component: ReactiveFormGroupPopulateValuesComponent,
      },
      {
        path: "reactive-form-builder",
        component: ReactiveFormBuilderComponent,
      },
      {
        path: "reactive-nested-form-builder",
        component: ReactiveNestedFormBuilderComponent,
      },
      {
        path: "reactive-form-builder-validation",
        component: ReactiveFormBuilderValidationComponent,
      },
      { path: "template-driven-form", component: TemplateDrivenFormComponent },
      {
        path: "template-driven-form-two-way-binding",
        component: TemplateDrivenFormTwoWayBindingComponent,
      },
      {
        path: "template-driven-form-two-way-binding-validation",
        component: TemplateDrivenFormTwoWayBindingValidationComponent,
      },
      {
        path: "reactive-form-nested-dynamic-form-array-component",
        component: ReactiveFormNestedDynamicFormArrayComponent,
      },
    ],
  },
  { path: "component-interaction", component: ComponentInteractionComponent },
  { path: "life-cycle", component: LifeCycleComponent },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
    canActivate: [CheckGuard]
  },
  {
    path: "user",
    loadChildren: () =>
      import("./modules/user/user.module").then((m) => m.UserModule),
    canActivate: [AuthGuard]
  },
  { path: "**", component: PageNotFoundComponent },
];

export default route;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BindingComponent } from './component/binding/binding.component';
import { PropertyBindingComponent } from './component/binding/property-binding/property-binding.component';
import { TextBindingComponent } from './component/binding/text-binding/text-binding.component';
import { ClassBindingComponent } from './component/binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './component/binding/style-binding/style-binding.component';
import { TwoWayBindingComponent } from './component/binding/two-way-binding/two-way-binding.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { SqrtPipe } from './component/pipe/sqrt.pipe';
import { SquarePipe } from './component/pipe/square.pipe';
import { CapitalizePipe } from './component/pipe/capitalize.pipe';
import { DirectiveComponent } from './component/directive/directive.component';
import { D1Directive } from './component/directive/d1.directive';
import { RendererDirectiveDirective } from './component/directive/renderer-directive.directive';
import { HostlistenerDirectiveDirective } from './component/directive/hostlistener-directive.directive';
import { HostbinderDirectiveDirective } from './component/directive/hostbinder-directive.directive';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { EventBindingComponent } from './component/binding/event-binding/event-binding.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TextBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipeComponent,
    SqrtPipe,
    SquarePipe,
    CapitalizePipe,
    DirectiveComponent,
    D1Directive,
    RendererDirectiveDirective,
    HostlistenerDirectiveDirective,
    HostbinderDirectiveDirective,
    PageNotFoundComponent,
    HeaderComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

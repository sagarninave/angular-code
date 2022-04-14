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
import { EvenBidingComponent } from './component/binding/even-biding/even-biding.component';
import { TwoWayBindingComponent } from './component/binding/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TextBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EvenBidingComponent,
    TwoWayBindingComponent,
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

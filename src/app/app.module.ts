import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './component/binding/binding.component';
import { PropertyBindingComponent } from './component/property-binding/property-binding.component';
import { TextBindingComponent } from './component/text-binding/text-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TextBindingComponent,
    PropertyBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

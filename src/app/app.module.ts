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
import { PipeComponent } from './component/pipe/pipe.component';
import { SqrtPipe } from './component/pipe/sqrt.pipe';
import { SquarePipe } from './component/pipe/square.pipe';
import { CapitalizePipe } from './component/pipe/capitalize.pipe';

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
    PipeComponent,
    SqrtPipe,
    SquarePipe,
    CapitalizePipe,
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

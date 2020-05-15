import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingModule} from './landing/landing.module';
import {RegisterModule} from './register/register.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingModule,
    RegisterModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

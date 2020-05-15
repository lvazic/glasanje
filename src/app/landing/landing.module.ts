import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {CountdownModule} from '../countdown/countdown.module';

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    CountdownModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [
    LandingComponent,
  ],
})
export class LandingModule {
}

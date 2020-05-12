import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
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
    RouterModule,
  ],
  exports: [
    LandingComponent,
  ],
})
export class LandingModule {
}

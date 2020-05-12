import {ChangeDetectionStrategy, Component} from '@angular/core';

/** Renders landing page. */
@Component({
  selector: 'glasanje-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {

}

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

interface CountdownInfo {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/** Renders countdown to election date. */
@Component({
  selector: 'glasanje-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent {

  readonly electionDate = new Date('June 21, 2020 12:00:00');
  readonly countdown$ = interval(200).pipe(map(() => this.buildCountdownInfo()));

  private buildCountdownInfo(): CountdownInfo {
    let diff = Math.floor(this.electionDate.getTime() - new Date().getTime()) / 1000;

    const days = Math.floor(diff / (60 * 60 * 24));
    diff -= days * 60 * 60 * 24;
    const hours = Math.floor(diff / (60 * 60)) % 24;
    diff -= hours * 60 * 60;
    const minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;
    const seconds = Math.round(diff % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

}


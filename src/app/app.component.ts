import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { concat, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spotify-clone';

  constructor(
    private appRef: ApplicationRef,
    private updates: SwUpdate
  ) {
  }

  ngOnInit(): void {
    this.subscribeToAppUpdates();
    this.logUpdates();
  }

  private subscribeToAppUpdates(): void {
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everyOneHours$ = interval(1 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everyOneHours$);

    appIsStable$.subscribe(() => this.updates.checkForUpdate());
  }

  private logUpdates(): void {
    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);

      if (confirm('Existe una actualización disponible. Deseas actualizar?')) {
        this.updates.activateUpdate().then(() => document.location.reload());
      }
    });
    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}

import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoadingService } from './core/services/loading.service';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading: boolean;

  constructor(private loadingService: LoadingService) {
    this.loadingService.loadingObservable$
      .pipe(delay(1)) // Fix expression has been changed...
      .subscribe(this.handleLoading().bind(this));
  }

  handleLoading(): (v: boolean) => void {
    return v => (this.loading = v);
  }
}

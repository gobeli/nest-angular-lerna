import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoadingService } from './core/services/loading.service';
import { tap, delay, debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading: boolean;

  constructor(private loadingService: LoadingService) {
    // Only show the loading bar, if the loading state lasts for more than 50ms
    this.loadingService.loading$
      .pipe(debounceTime(50))
      .subscribe(this.handleLoading().bind(this));
  }

  handleLoading(): (v: boolean) => void {
    return v => (this.loading = v);
  }
}

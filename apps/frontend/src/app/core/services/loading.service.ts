import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading: number = 0;
  public loading$: Subject<boolean> = new Subject();

  public start() {
    this.loading$.next(++this._loading > 0);
  }

  public stop() {
    this.loading$.next(--this._loading > 0);
  }
}

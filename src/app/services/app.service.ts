import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LocalStorageService} from "./local-storage.service";

export enum DisplayMode {
  GRID = "grid",
  LIST = "list"
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private localStorageService: LocalStorageService) {
    this._display_mode.next(
      localStorageService.getDisplayMode() === 'grid'
        ? DisplayMode.GRID : DisplayMode.LIST
    )
  }

  private _display_mode: Subject<DisplayMode> = new Subject<DisplayMode>()

  set display_mode(value: DisplayMode) {
    this._display_mode.next(value);
    this.localStorageService.setDisplayMode(value)
  }

  private _display_mode$: Observable<DisplayMode> = this._display_mode.asObservable()

  get display_mode$(): Observable<DisplayMode> {
    return this._display_mode$;
  }
}

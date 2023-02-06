import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  /**
   * Method that return the display mode from storage.
   */
  getDisplayMode() {
    return localStorage.getItem(environment.display_mode_key)
  }

  /**
   * Method that store the display mode
   * @param value
   */
  setDisplayMode(value: string) {
    localStorage.setItem(environment.display_mode_key, value)
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styles: []
})
export class HeaderMenuComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    return this.router.navigate([path])
  }

  logout() {
    // TODO
  }

  downloadLocalVersion() {
    // TODO
  }
}

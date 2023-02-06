import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {NavigationItemComponent} from "./navigation-item/navigation-item.component";
import {SvgIndicatorComponent} from "../../svg/svg-indicator/svg-indicator.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: []
})
export class NavigationComponent implements OnInit, AfterViewInit {
  currentPath: string = ''
  @ViewChild("indicatorComponent") indicatorComponent: SvgIndicatorComponent | any
  @ViewChild("navItem1") navItem1: NavigationItemComponent | any
  @ViewChild("navItem2") navItem2: NavigationItemComponent | any
  @ViewChild("navItem3") navItem3: NavigationItemComponent | any
  @ViewChild("navItem4") navItem4: NavigationItemComponent | any

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.currentPath = value.url
        if (this.currentPath.includes('/folders')) {
          const rect = this.navItem2.getRect()
          this.indicatorComponent.getElement().style.top = `${rect.top + 3}px`
          return
        }
        if (this.currentPath.includes('/establishments')) {
          const rect = this.navItem3.getRect()
          this.indicatorComponent.getElement().style.top = `${rect.top + 3}px`
          return
        }
        if (this.currentPath.includes('/settings')) {
          const rect = this.navItem4.getRect()
          this.indicatorComponent.getElement().style.top = `${rect.top + 3}px`
          return
        }
        if (this.currentPath === '/cloud') {
          const rect = this.navItem1.getRect()
          this.indicatorComponent.getElement().style.top = `${rect.top + 3}px`
        }
      }
    })
  }

  navigateTo(path: string) {
    return this.router.navigate([path])
  }

  checkPath(path: string) {
    return this.currentPath.includes(path)
  }
}

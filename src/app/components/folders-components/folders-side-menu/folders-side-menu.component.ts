import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {FAKE_FOLDERS, Folder} from "../../../../models/Folder";

@Component({
  selector: 'app-folders-side-menu',
  templateUrl: './folders-side-menu.component.html',
  styles: []
})
export class FoldersSideMenuComponent implements OnInit, AfterViewInit {
  currentPath: string = "";
  subMenuContent: Folder[] = FAKE_FOLDERS;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    setTimeout(() => this.currentPath = window.location.pathname, 0)
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        console.log(value.url)
        this.currentPath = value.url
      }
    })
  }

  checkPath(path: string) {
    return this.currentPath === path
  }
}

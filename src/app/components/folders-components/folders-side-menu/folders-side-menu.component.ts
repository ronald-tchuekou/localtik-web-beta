import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-folders-side-menu',
  templateUrl: './folders-side-menu.component.html',
  styles: []
})
export class FoldersSideMenuComponent implements OnInit, AfterViewInit {
  currentPath: string = "";
  subMenuContent: any[] = [
    {id: 'folder_id_1', folderName: 'Dossier 1'},
    {id: 'folder_id_2', folderName: 'Dossier 2'},
    {id: 'folder_id_3', folderName: 'Dossier 3'},
  ];

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

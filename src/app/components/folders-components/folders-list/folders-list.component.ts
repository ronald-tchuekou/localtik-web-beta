import {Component, OnInit} from '@angular/core';
import {FAKE_FOLDERS, Folder} from "../../../../models/Folder";
import {AppService, DisplayMode} from "../../../services/app.service";

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styles: []
})
export class FoldersListComponent implements OnInit {
  folders: Folder[] = [
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
    ...FAKE_FOLDERS,
  ]
  isListMode: boolean = false;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.display_mode$.subscribe((value) => {
      this.isListMode = value === DisplayMode.LIST
    })
  }

}

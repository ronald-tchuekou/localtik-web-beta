import {Component, OnInit} from '@angular/core';
import {FAKE_FOLDERS, Folder} from "../../../../models/Folder";

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

  constructor() {
  }

  ngOnInit(): void {
  }

}

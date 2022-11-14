import {Component, Input, OnInit} from '@angular/core';
import {DEFAULT_FOLDER, Folder} from "../../../../../models/Folder";

@Component({
  selector: 'app-folder-list-item',
  templateUrl: './folder-list-item.component.html',
  styles: []
})
export class FolderListItemComponent implements OnInit {
  @Input() folder: Folder = DEFAULT_FOLDER

  constructor() {
  }

  ngOnInit(): void {
  }

}

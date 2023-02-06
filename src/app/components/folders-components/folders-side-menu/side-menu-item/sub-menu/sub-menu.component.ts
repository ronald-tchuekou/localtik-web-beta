import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Folder} from "../../../../../../models/Folder";

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styles: []
})
export class SubMenuComponent implements OnInit {
  @Input()
  active: boolean = false;
  @Output()
  click = new EventEmitter()
  @Input()
  item: Folder | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}

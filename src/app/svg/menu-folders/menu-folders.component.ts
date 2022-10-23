import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'svg-menu-folders',
  templateUrl: './menu-folders.component.html',
  styles: [
  ]
})
export class MenuFoldersComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

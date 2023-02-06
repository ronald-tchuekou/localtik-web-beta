import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'svg-menu-folders',
  templateUrl: './svg-menu-folders.component.html',
  styles: [
  ]
})
export class SvgMenuFoldersComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

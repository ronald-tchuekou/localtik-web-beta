import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'svg-folders',
  templateUrl: './svg-folders.component.html',
  styles: [
  ]
})
export class SvgFoldersComponent implements OnInit {
  @Input()
  activated: boolean = false
  @Input()
  default: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-trash-side',
  templateUrl: './svg-trash-side.component.html',
  styles: [
  ]
})
export class SvgTrashSideComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

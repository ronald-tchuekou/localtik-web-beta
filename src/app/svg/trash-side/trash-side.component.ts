import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-trash-side',
  templateUrl: './trash-side.component.html',
  styles: [
  ]
})
export class TrashSideComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

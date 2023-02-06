import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-file-side',
  templateUrl: './svg-file-side.component.html',
  styles: [
  ]
})
export class SvgFileSideComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

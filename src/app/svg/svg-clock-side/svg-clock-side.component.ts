import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-clock-side',
  templateUrl: './svg-clock-side.component.html',
  styles: [
  ]
})
export class SvgClockSideComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

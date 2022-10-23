import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-clock-side',
  templateUrl: './clock-side.component.html',
  styles: [
  ]
})
export class ClockSideComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

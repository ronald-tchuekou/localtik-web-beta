import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-cloud',
  templateUrl: './svg-cloud.component.html',
  styles: [
  ]
})
export class SvgCloudComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-cloud-side',
  templateUrl: './svg-cloud-side.component.html',
  styles: [
  ]
})
export class SvgCloudSideComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

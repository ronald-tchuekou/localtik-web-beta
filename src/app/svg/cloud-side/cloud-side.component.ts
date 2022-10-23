import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-cloud-side',
  templateUrl: './cloud-side.component.html',
  styles: [
  ]
})
export class CloudSideComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

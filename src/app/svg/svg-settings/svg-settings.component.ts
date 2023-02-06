import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'svg-settings',
  templateUrl: './svg-settings.component.html',
  styles: [
  ]
})
export class SvgSettingsComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

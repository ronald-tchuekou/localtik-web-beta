import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'svg-arrow-right',
  templateUrl: './svg-arrow-right.component.html',
  styles: []
})
export class SvgArrowRightComponent implements OnInit {
  @Input() activated: boolean = false
  @Input() rotate: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}

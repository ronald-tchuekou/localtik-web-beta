import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'svg-arrow-right',
  templateUrl: './arrow-right.component.html',
  styles: []
})
export class ArrowRightComponent implements OnInit {
  @Input() activated: boolean = false
  @Input() rotate: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}

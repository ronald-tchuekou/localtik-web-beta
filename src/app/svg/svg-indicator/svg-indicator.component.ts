import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'svg-indicator',
  templateUrl: './svg-indicator.component.html',
  styles: []
})
export class SvgIndicatorComponent implements OnInit {
  @ViewChild('svg') svg: any

  constructor() {
  }

  ngOnInit(): void {
  }

  getElement() {
    return this.svg.nativeElement
  }
}

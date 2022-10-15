import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styles: []
})
export class IndicatorComponent implements OnInit {
  @ViewChild('svg') svg: any

  constructor() {
  }

  ngOnInit(): void {
  }

  getElement() {
    return this.svg.nativeElement
  }
}

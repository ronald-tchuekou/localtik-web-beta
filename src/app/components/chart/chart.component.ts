import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: []
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() value: number = 40;
  @Input() bg_class: string = 'stroke-purple-500/20';
  @Input() bg_indicator: string = 'stroke-purple-500';
  @Input() text_fill: string = 'fill-purple-500';
  max: number = 285;
  progress: number = 285 - (285 * this.value) / 100;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['value']
    if (change) {
      this.progress = 285 - (285 * change.currentValue) / 100;
    }
  }

}

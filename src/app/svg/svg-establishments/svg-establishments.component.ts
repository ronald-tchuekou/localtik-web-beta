import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'svg-establishments',
  templateUrl: './svg-establishments.component.html',
  styles: [
  ]
})
export class SvgEstablishmentsComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styles: [
  ]
})
export class EstablishmentsComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.component.html',
  styles: [
  ]
})
export class EstablishmentDetailsComponent implements OnInit {

  @Input() withBackButton: boolean = false
  @Output() onBack = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-establishment-list-item',
  templateUrl: './establishment-list-item.component.html',
  styles: [
  ]
})
export class EstablishmentListItemComponent implements OnInit {

  @Input() active: boolean = false
  @Output() onItemClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styles: []
})
export class EstablishmentListComponent implements OnInit {
  establishments: any[] = [
    {id: "est_1"},
    {id: "est_2"},
    {id: "est_3"},
    {id: "est_4"},
    {id: "est_5"},
    {id: "est_6"},
  ];
  @Input() currentEstablishment: any = {}
  @Output() currentEstablishmentChange = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
    this.currentEstablishmentChange.emit(this.establishments[0])
  }

}

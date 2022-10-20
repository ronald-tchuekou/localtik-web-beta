import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-establishments',
  templateUrl: './home-establishments.component.html',
  styles: [
  ]
})
export class HomeEstablishmentsComponent implements OnInit {
  currentEstablishment: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}

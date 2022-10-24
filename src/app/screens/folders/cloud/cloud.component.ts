import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styles: [
  ]
})
export class CloudComponent implements OnInit {
  display_mode: String = 'grid'

  constructor() { }

  ngOnInit(): void {
  }

}

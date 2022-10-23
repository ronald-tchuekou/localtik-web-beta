import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-file-side',
  templateUrl: './file-side.component.html',
  styles: [
  ]
})
export class FileSideComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

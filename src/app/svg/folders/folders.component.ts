import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styles: [
  ]
})
export class FoldersComponent implements OnInit {
  @Input() activated = false

  constructor() { }

  ngOnInit(): void {
  }

}

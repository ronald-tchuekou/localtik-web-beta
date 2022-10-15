import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styles: []
})
export class NavigationItemComponent implements OnInit {
  @Input() activated = false
  @ViewChild('button') button: any

  constructor() {
  }

  ngOnInit(): void {
  }

  getRect() {
    return this.button.nativeElement ? this.button.nativeElement.getBoundingClientRect() : {}
  }

}

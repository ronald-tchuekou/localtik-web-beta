import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Folder} from "../../../../../models/Folder";

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styles: []
})
export class SideMenuItemComponent implements OnInit, OnChanges {
  @ViewChild('subMenuContent') subMenuContent: any
  @Input() active: boolean = false;
  @Input() withSub: boolean = false;
  @Input() title: string = "";
  @Input() currentPath: string = "";
  @Input() path: string = '';
  @Input() subMenu: Folder[] = [];
  show: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['currentPath']
    if (change) {
      if (change.currentValue !== '/folders/f-cloud' && change.currentValue.includes(this.path)) {
        this.toggleSubMenu(true)
      }
    }
  }

  goTo(path: string) {
    return this.router.navigate([path])
  }

  checkPath(path: string) {
    return this.currentPath === path
  }

  toggleSubMenu(value?: boolean) {
    const sub_menu = this.subMenuContent.nativeElement
    this.show = value ? value : !this.show
    if (sub_menu) {
      sub_menu.style.transition = `300ms`
      if (this.show) {
        sub_menu.style.height = `${this.subMenu.length * 38}px`
        sub_menu.style.paddingTop = `0.3rem`
        sub_menu.style.paddingBottom = `0.3rem`
      } else {
        sub_menu.style.height = `0`
        sub_menu.style.paddingTop = `0`
        sub_menu.style.paddingBottom = `0`
      }
    }
  }
}

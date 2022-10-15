import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {NavigationItemComponent} from './navigation-item/navigation-item.component';
import {SvgModule} from "../../svg/svg.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NavigationComponent,
    NavigationItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}

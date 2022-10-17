import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {NavigationItemComponent} from './navigation-item/navigation-item.component';
import {SvgModule} from "../../svg/svg.module";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [
    NavigationComponent,
    NavigationItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}

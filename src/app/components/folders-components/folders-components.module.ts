import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoldersSideMenuComponent} from './folders-side-menu/folders-side-menu.component';
import {SideMenuItemComponent} from './folders-side-menu/side-menu-item/side-menu-item.component';
import {SubMenuComponent} from './folders-side-menu/side-menu-item/sub-menu/sub-menu.component';
import {SvgModule} from "../../svg/svg.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    FoldersSideMenuComponent,
    SideMenuItemComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
  ],
  exports: [
    FoldersSideMenuComponent
  ]
})
export class FoldersComponentsModule {
}
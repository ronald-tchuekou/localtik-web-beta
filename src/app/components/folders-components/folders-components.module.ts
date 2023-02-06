import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoldersSideMenuComponent} from './folders-side-menu/folders-side-menu.component';
import {SideMenuItemComponent} from './folders-side-menu/side-menu-item/side-menu-item.component';
import {SubMenuComponent} from './folders-side-menu/side-menu-item/sub-menu/sub-menu.component';
import {SvgModule} from "../../svg/svg.module";
import {RouterModule} from "@angular/router";
import {FoldersListComponent} from './folders-list/folders-list.component';
import {FolderListItemComponent} from './folders-list/folder-list-item/folder-list-item.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    FoldersSideMenuComponent,
    SideMenuItemComponent,
    SubMenuComponent,
    FoldersListComponent,
    FolderListItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    FoldersSideMenuComponent,
    FoldersListComponent
  ]
})
export class FoldersComponentsModule {
}

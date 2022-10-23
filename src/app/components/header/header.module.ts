import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatIconModule} from "@angular/material/icon";
import {ImageLoaderModule} from "../image-loader/image-loader.module";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderNotificationsComponent } from './header-notifications/header-notifications.component';
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    HeaderNotificationsComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        ImageLoaderModule,
        MatButtonModule,
        MatRippleModule,
        MatMenuModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

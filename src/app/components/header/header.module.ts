import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatIconModule} from "@angular/material/icon";
import {ImageLoaderModule} from "../image-loader/image-loader.module";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";



@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        ImageLoaderModule,
        MatButtonModule,
        MatRippleModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentsListComponent } from './establishments-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    EstablishmentsListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    EstablishmentsListComponent
  ]
})
export class EstablishmentsListModule { }

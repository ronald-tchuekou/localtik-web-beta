import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeEstablishmentsComponent} from './home-establishments.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {EstablishmentListComponent} from "./establishment-list/establishment-list.component";
import {EstablishmentDetailsComponent} from "./establishment-details/establishment-details.component";
import {
  EstablishmentListItemComponent
} from "./establishment-list/establishment-list-item/establishment-list-item.component";
import {MatTabsModule} from "@angular/material/tabs";
import {ImageLoaderModule} from "../image-loader/image-loader.module";
import {MatRippleModule} from "@angular/material/core";
import {ChartModule} from "../chart/chart.module";


@NgModule({
  declarations: [
    HomeEstablishmentsComponent,
    EstablishmentListComponent,
    EstablishmentDetailsComponent,
    EstablishmentListItemComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        ImageLoaderModule,
        MatRippleModule,
        ChartModule
    ],
  exports: [
    HomeEstablishmentsComponent,
    EstablishmentListItemComponent
  ]
})
export class HomeEstablishmentsModule {
}

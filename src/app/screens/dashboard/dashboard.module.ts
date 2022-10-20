import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ImageLoaderModule} from "../../components/image-loader/image-loader.module";
import {HeaderModule} from "../../components/header/header.module";
import {ChartModule} from "../../components/chart/chart.module";
import {HomeEstablishmentsModule} from "../../components/home-establishments/home-establishments.module";


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ImageLoaderModule,
    HeaderModule,
    ChartModule,
    HomeEstablishmentsModule
  ],
  exports: []
})
export class DashboardModule {
}

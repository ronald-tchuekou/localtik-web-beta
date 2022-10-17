import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ImageLoaderModule} from "../../components/image-loader/image-loader.module";
import {HeaderModule} from "../../components/header/header.module";
import {ChartModule} from "../../components/chart/chart.module";
import {EstablishmentsListModule} from "../../components/establishments-list/establishments-list.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ImageLoaderModule,
        HeaderModule,
        ChartModule,
        EstablishmentsListModule
    ]
})
export class DashboardModule { }

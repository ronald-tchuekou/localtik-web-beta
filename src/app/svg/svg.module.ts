import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudComponent } from './cloud/cloud.component';
import { FoldersComponent } from './folders/folders.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { SettingsComponent } from './settings/settings.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { NavBgComponent } from './nav-bg/nav-bg.component';
import { TraficComponent } from './trafic/trafic.component';



@NgModule({
  declarations: [
    CloudComponent,
    FoldersComponent,
    EstablishmentsComponent,
    SettingsComponent,
    IndicatorComponent,
    NavBgComponent,
    TraficComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CloudComponent,
    FoldersComponent,
    EstablishmentsComponent,
    SettingsComponent,
    IndicatorComponent,
    NavBgComponent,
    TraficComponent
  ]
})
export class SvgModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CloudComponent} from './cloud/cloud.component';
import {FoldersComponent} from './folders/folders.component';
import {EstablishmentsComponent} from './establishments/establishments.component';
import {SettingsComponent} from './settings/settings.component';
import {IndicatorComponent} from './indicator/indicator.component';
import {NavBgComponent} from './nav-bg/nav-bg.component';
import {TraficComponent} from './trafic/trafic.component';
import {MenuFoldersComponent} from "./menu-folders/menu-folders.component";
import {ArrowRightComponent} from "./arrow-right/arrow-right.component";
import {CloudSideComponent} from "./cloud-side/cloud-side.component";
import {ClockSideComponent} from "./clock-side/clock-side.component";
import {TrashSideComponent} from "./trash-side/trash-side.component";
import {FileSideComponent} from "./file-side/file-side.component";


@NgModule({
  declarations: [
    CloudComponent,
    CloudSideComponent,
    FoldersComponent,
    EstablishmentsComponent,
    SettingsComponent,
    IndicatorComponent,
    NavBgComponent,
    TraficComponent,
    MenuFoldersComponent,
    ArrowRightComponent,
    ClockSideComponent,
    TrashSideComponent,
    FileSideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CloudComponent,
    CloudSideComponent,
    FoldersComponent,
    EstablishmentsComponent,
    SettingsComponent,
    IndicatorComponent,
    NavBgComponent,
    TraficComponent,
    MenuFoldersComponent,
    ArrowRightComponent,
    ClockSideComponent,
    TrashSideComponent,
    FileSideComponent
  ]
})
export class SvgModule {
}

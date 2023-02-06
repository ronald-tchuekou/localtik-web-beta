import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgCloudComponent} from './svg-cloud/svg-cloud.component';
import {SvgFoldersComponent} from './svg-folders/svg-folders.component';
import {SvgEstablishmentsComponent} from './svg-establishments/svg-establishments.component';
import {SvgSettingsComponent} from './svg-settings/svg-settings.component';
import {SvgIndicatorComponent} from './svg-indicator/svg-indicator.component';
import {SvgNavBgComponent} from './svg-nav-bg/svg-nav-bg.component';
import {SvgTraficComponent} from './svg-trafic/svg-trafic.component';
import {SvgMenuFoldersComponent} from "./svg-menu-folders/svg-menu-folders.component";
import {SvgArrowRightComponent} from "./svg-arrow-right/svg-arrow-right.component";
import {SvgCloudSideComponent} from "./svg-cloud-side/svg-cloud-side.component";
import {SvgClockSideComponent} from "./svg-clock-side/svg-clock-side.component";
import {SvgTrashSideComponent} from "./svg-trash-side/svg-trash-side.component";
import {SvgFileSideComponent} from "./svg-file-side/svg-file-side.component";


@NgModule({
  declarations: [
    SvgCloudComponent,
    SvgCloudSideComponent,
    SvgFoldersComponent,
    SvgEstablishmentsComponent,
    SvgSettingsComponent,
    SvgIndicatorComponent,
    SvgNavBgComponent,
    SvgTraficComponent,
    SvgMenuFoldersComponent,
    SvgArrowRightComponent,
    SvgClockSideComponent,
    SvgTrashSideComponent,
    SvgFileSideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgCloudComponent,
    SvgCloudSideComponent,
    SvgFoldersComponent,
    SvgEstablishmentsComponent,
    SvgSettingsComponent,
    SvgIndicatorComponent,
    SvgNavBgComponent,
    SvgTraficComponent,
    SvgMenuFoldersComponent,
    SvgArrowRightComponent,
    SvgClockSideComponent,
    SvgTrashSideComponent,
    SvgFileSideComponent
  ]
})
export class SvgModule {
}

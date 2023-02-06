import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FoldersRoutingModule} from './folders-routing.module';
import {FoldersComponent} from './folders.component';
import {HeaderModule} from "../../components/header/header.module";
import {FoldersComponentsModule} from "../../components/folders-components/folders-components.module";
import {CloudComponent} from './cloud/cloud.component';
import {RecentComponent} from './recent/recent.component';
import {TrashComponent} from './trash/trash.component';
import {ShareFoldersComponent} from './share-folders/share-folders.component';
import {ShareFilesComponent} from './share-files/share-files.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    FoldersComponent,
    CloudComponent,
    RecentComponent,
    TrashComponent,
    ShareFoldersComponent,
    ShareFilesComponent
  ],
   exports: [
      FoldersComponent,
      ShareFoldersComponent
   ],
  imports: [
    CommonModule,
    FoldersRoutingModule,
    HeaderModule,
    FoldersComponentsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FoldersModule {
}

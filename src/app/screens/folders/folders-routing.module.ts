import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './folders.component';
import {CloudComponent} from "./cloud/cloud.component";
import {RecentComponent} from "./recent/recent.component";
import {TrashComponent} from "./trash/trash.component";
import {ShareFoldersComponent} from "./share-folders/share-folders.component";
import {ShareFilesComponent} from "./share-files/share-files.component";

const routes: Routes = [
  { path: '', component: FoldersComponent, children : [
      { path: '', redirectTo: 'f-cloud', pathMatch: 'full'},
      { path: 'f-cloud', component: CloudComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'recent', component: RecentComponent },
      { path: 'share-files', component: ShareFilesComponent },
      { path: 'f-cloud/:folder_id', component: CloudComponent },
      { path: 'share-folders', component: ShareFoldersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersComponent } from './folders.component';


@NgModule({
    declarations: [
        FoldersComponent
    ],
    exports: [
        FoldersComponent
    ],
    imports: [
        CommonModule,
        FoldersRoutingModule
    ]
})
export class FoldersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersComponent } from './folders.component';
import {HeaderModule} from "../../components/header/header.module";


@NgModule({
    declarations: [
        FoldersComponent
    ],
    exports: [
        FoldersComponent
    ],
    imports: [
        CommonModule,
        FoldersRoutingModule,
        HeaderModule
    ]
})
export class FoldersModule { }

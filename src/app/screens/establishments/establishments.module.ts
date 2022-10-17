import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentsRoutingModule } from './establishments-routing.module';
import { EstablishmentsComponent } from './establishments.component';
import {HeaderModule} from "../../components/header/header.module";


@NgModule({
    declarations: [
        EstablishmentsComponent
    ],
    exports: [
        EstablishmentsComponent
    ],
    imports: [
        CommonModule,
        EstablishmentsRoutingModule,
        HeaderModule
    ]
})
export class EstablishmentsModule { }

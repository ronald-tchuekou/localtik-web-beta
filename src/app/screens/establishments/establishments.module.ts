import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentsRoutingModule } from './establishments-routing.module';
import { EstablishmentsComponent } from './establishments.component';


@NgModule({
    declarations: [
        EstablishmentsComponent
    ],
    exports: [
        EstablishmentsComponent
    ],
    imports: [
        CommonModule,
        EstablishmentsRoutingModule
    ]
})
export class EstablishmentsModule { }

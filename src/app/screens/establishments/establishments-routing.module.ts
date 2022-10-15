import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentsComponent } from './establishments.component';

const routes: Routes = [{ path: '', component: EstablishmentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentsRoutingModule { }

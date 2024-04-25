import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../AngularMaterialModule';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,AngularMaterialModule
  ],
  declarations: []
})
export class RoutingModule { }

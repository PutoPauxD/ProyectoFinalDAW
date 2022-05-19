import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalitiesComponent } from './functionalities.component';
import { FunctionalitiesRoutingModule } from './functionalities-routing.module';
import { SharedModule } from '../common/shared.module';



@NgModule({
  declarations: [
    FunctionalitiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FunctionalitiesRoutingModule,
  ]
})
export class FunctionalitiesModule { }

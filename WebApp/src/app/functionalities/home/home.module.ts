import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/common/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    InfiniteScrollModule,
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {SkeletonModule} from 'primeng/skeleton';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [],
  exports: [
    CarouselModule,
    SkeletonModule,
    PaginatorModule
  ]
})
export class PrimeModule { }

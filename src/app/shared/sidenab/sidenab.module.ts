import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenabComponent } from './sidenab.component';



@NgModule({
  declarations: [
    SidenabComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidenabComponent
  ]
})
export class SidenabModule { }

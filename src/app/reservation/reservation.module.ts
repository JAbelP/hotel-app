import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResservationFormComponent } from '../resservation-form/resservation-form.component';
import { ResservationListComponent } from '../resservation-list/resservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    ResservationFormComponent,
    ResservationListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ]
})
export class 
ReservationModule { }

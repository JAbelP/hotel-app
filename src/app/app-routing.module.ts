import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResservationFormComponent } from './resservation-form/resservation-form.component';
import { ResservationListComponent } from './resservation-list/resservation-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"list", component: ResservationListComponent},
  {path:"new", component: ResservationFormComponent},
  {path:"edit/:id", component:ResservationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

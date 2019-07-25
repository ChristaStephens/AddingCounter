import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingCounterComponent } from './adding-counter/adding-counter.component';

const routes: Routes = [
  {path:"AddingCounter", component: AddingCounterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

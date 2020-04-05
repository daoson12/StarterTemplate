import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './layout/landing/landing.component';
import { IndexComponent } from './home/index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'dashboard', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimulationDetailsComponent } from './simulation-details/simulation-details.component';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';
import { SimulationListComponent } from './simulation-list/simulation-list.component';
const routes: Routes = [
  {path: 'simulations', component: SimulationListComponent},
  {path: 'simulation', component: SimulationFormComponent},
  {path: 'simulation/:id', component: SimulationDetailsComponent},
  {path: '', redirectTo: '/simulations', pathMatch: 'prefix'},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SimulationListComponent, 
  PageNotFoundComponent, 
  SimulationFormComponent,
  SimulationDetailsComponent]

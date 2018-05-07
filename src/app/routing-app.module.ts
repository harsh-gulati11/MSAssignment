import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardsDetailsComponent } from './components/cards-details/cards-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/Portfolio', pathMatch: 'full' },
  { path: 'Portfolio', component: CardsComponent },
  { path: 'PortfolioDetails', component: CardsDetailsComponent },
  { path: 'PortfolioDetails/:id', component: CardsDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingAppModule {}

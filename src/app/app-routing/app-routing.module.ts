import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { BuyersComponent } from '../components/buyers/buyers.component';
import { ProductsComponent } from '../components/products/products.component';
import { BuyerDetailsComponent } from '../components/buyers/buyer-details/buyer-details.component';


const appRoutes = [
	{path: 'products', component: ProductsComponent},
	{path: 'buyers', component: BuyersComponent},
	{path: 'buyers/:id', component: BuyerDetailsComponent}

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  declarations: [],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }

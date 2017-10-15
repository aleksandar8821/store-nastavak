import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { BuyersServiceService } from './services/buyers-service.service';
import { ProductsService } from './services/products.service';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { BuyerDetailsComponent } from './components/buyers/buyer-details/buyer-details.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponent,
    ProductsComponent,
    BuyerDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BuyersServiceService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

	private products: Product[] = [
    {
      id: 1,
      name: "Televizor",
      quantity: 135,
    },
    {
      id: 2,
      name: "Mobilni",
      quantity: 22,
    },
    {
      id: 3,
      name: "Sokovnik",
      quantity: 312,
    },
    {
      id: 4,
      name: "Tastature",
      quantity: 476,
    }
  ]

  constructor() { }

  getProducts(){
  	return this.products;
  }

}

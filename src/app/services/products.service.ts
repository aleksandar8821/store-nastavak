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

  public findProduct(products){
    return this.products.find((product) => {
      return product['id'] === products.id;
    })
  }


  public addQuantity(product) {
    let singleProduct = this.findProduct(product);
    return singleProduct.quantity ++;
  }

  public removeQuantity(product) {
    let singleProduct = this.findProduct(product);
    if (singleProduct.quantity >= 1) {
    	return singleProduct.quantity --;
    }
    
  }


}

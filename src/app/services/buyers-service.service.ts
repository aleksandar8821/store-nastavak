import { Injectable } from '@angular/core';
import { Buyer } from '../models/buyer';

@Injectable()
export class BuyersServiceService {

	private buyers: Buyer[] = [
    {
      id: 1,
      firstName: "Nikola",  
      lastName: "Nikolic",
      email: "nikolic@gmail.com",
      products: [
        { name : 'Televizor' },
        { name : 'Mobilni' },
        { name : 'Racunar' }
      ]
    },
    {
      id: 2,
      firstName: "Milan",
      lastName: "Miovanovic",
      email: "milovanovic@gmail.com",
      products: [
        { name : 'Casa' },
        { name : 'Sto' },
        { name : 'Stolica' }
      ]
    },
    {
      id: 3,
      firstName: "Petar",
      lastName: "Petrovic",
      email: "petrovic@gmail.com",
      products: [
        { name : 'Slusalice' },
        { name : 'Mis' },
        { name : 'Tastatura' }
      ]
    },
    {
      id: 4,
      firstName: "Ivan",
      lastName: "Ivanovic",
      email: "ivanovic@gmail.com",
      products: [
        { name : 'Torba' },
        { name : 'Kesa' },
        { name : 'Patike' }
      ]
    }
  ]

  getBuyers(){
  	return this.buyers;
  }

  getBuyer(id){
    return this.buyers.find( buyer => buyer.id === id )
  }

  

  addBuyer(newBuyer){
  	newBuyer.id = this.buyers.length + 1;
  	this.buyers.push(newBuyer);
  	

  	console.log(newBuyer)
  }

  constructor() { }

}

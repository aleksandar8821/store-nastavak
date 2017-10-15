import { Component, OnInit } from '@angular/core';
import { BuyersServiceService } from '../../services/buyers-service.service'
import { Buyer } from '../../models/buyer'

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

	buyers:Array<Object>;
	newBuyer:Buyer = new Buyer();

  constructor(private buyersService:BuyersServiceService) {
  		this.buyers = buyersService.getBuyers();
  		console.log(this.buyers);
   }

  ngOnInit() {
  }

  addBuyer(){
  	this.buyersService.addBuyer(this.newBuyer);
  	this.newBuyer = new Buyer();
  }

  deleteBuyer(index){
  	this.buyers.splice(index, 1)
  }

}

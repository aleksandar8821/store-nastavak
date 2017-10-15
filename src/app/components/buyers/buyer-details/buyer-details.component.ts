import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router'
import { Buyer }  from '../../../models/buyer'
import { BuyersServiceService }  from '../../../services/buyers-service.service'




@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {

	buyer:Buyer;

  constructor(private buyersService:BuyersServiceService,  private route:ActivatedRoute) {
  		
  		// route.params.subscribe(params => {
    //   buyersService.getBuyers().forEach(buyer => {
    //     if (buyer['id'] == params.id) {
    //       this.buyer = buyer
    //     }
    //   })
    // });

    // Naravno moze i ovako iznad
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.buyer = this.buyersService.getBuyer(id);


   }

  ngOnInit() {
  }

}

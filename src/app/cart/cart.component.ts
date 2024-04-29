import { Component,inject } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { Card } from '../card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  route: ActivatedRoute = inject(ActivatedRoute)

  cardService = inject(CardService)
   Card: Card | undefined

   constructor(){
   const CardId = Number(this.route.snapshot.params['id']);

     this.cardService.getAllGodsById(CardId).then(Card => {
     this.Card = Card
     })  
   };

   cartService = inject(CartService);

  deleteFromCart(item: any){
    this.cartService.delete(item);
  }

}

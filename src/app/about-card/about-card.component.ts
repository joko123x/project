import { Component,inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardService } from '../card.service';
import { Card } from '../card';
import { CardComponent } from '../card/card.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CardComponent,RouterLink],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent {
    

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
  addToCart(product: any){
    this.cartService.addToCart(product);
  }


}

import { Component,Input,inject} from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Card } from '../card';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MenuComponent,NgFor,RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

 @Input()Card!:Card


 cartService = inject(CartService);
  addToCart(product: any){
    this.cartService.addToCart(product);
  }


}

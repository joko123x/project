import { Component,inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card';
import { CardService } from '../card.service';
import { NgFor } from '@angular/common';


@Component({


  selector: 'app-menu',
  standalone: true,
  imports: [CardComponent,NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  cardList:Card[] = []
  godService: CardService = inject(CardService)
  filteredcardList: Card[] = [];

  constructor(){

    

    this.godService.getAllGods().then((godList:Card[])=>{
      this.cardList = godList
      this.filteredcardList = godList;
    })

    
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredcardList = this.cardList;
      return;
    }
    this.filteredcardList = this.cardList.filter(
      Card => Card?.name.toLowerCase().includes(text.toLowerCase())
    );
  }



  oncategorychange(data:string) {
    if (data == 'all') {
      this.filteredcardList = this.cardList;
      return;
    }
    this.filteredcardList = this.cardList.filter(
      Card => Card?.jojo == data
    );
  }

   rangeSpiciness(spiciness:any){
    if(spiciness == 0){
      this.filteredcardList = this.cardList
    }
    {
      this.filteredcardList = this.cardList.filter(
          cardList => cardList?.spiciness >= spiciness
      )
    }
   }

 

}

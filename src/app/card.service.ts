import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

 
 


  url = 'https://6623e3343e17a3ac84708bfa.mockapi.io/zoro/zoro'
  constructor() { }



  



  async getAllGods() : Promise< Card[]> {
    const response  = await fetch(this.url)
    return await response.json() ?? []
  }


 async getAllGodsById(id:Number): Promise< Card | undefined >{
  
    const response = await fetch(`${this.url}/${id}`)

    return await response.json() ?? {}
  }



}



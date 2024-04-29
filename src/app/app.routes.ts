import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [





   
   {
    path:'', 
    component:HomeComponent,
   
   },
   {
      path:'menu',
      component:MenuComponent,
   },
   {
      path:'koko',
      component:AboutComponent, 

   },
   {
      path:'contact',
      component:ContactComponent
   },
   {
      path: 'login',
      component:LoginComponent,
   },
   {
      path:'aboutcard/:id',
      component:AboutCardComponent,
     
  },
  {
   path:'cart',
   component:CartComponent,

 },
 {
  path:'cart/:id',
  component:CartComponent,
 },

  
]


export default routes
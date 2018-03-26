import { Component, Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('cart') shoppingCart: ShoppingCart;

  constructor() { }


}
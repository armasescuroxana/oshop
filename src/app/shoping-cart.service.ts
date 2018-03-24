import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/operator/take';

@Injectable()
export class ShopingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({ dateCreated: new Date().getTime() });
  }

  private async  getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { return cartId; }
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  getCart(cartId) {
    return this.db.object('/shopping-carts/' + cartId);
  }
  private getItem(cartId, productKey) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productKey);
  }

  async addToCart(product: Product) {
    const cartId = await this.getOrCreateCartId();
    const item$ = await this.getItem(cartId, product.$key);

    item$.take(1).subscribe(item => {
      item$.update({ product: product, quantity: (item.quantity || 0) + 1 });

    });
  }
}

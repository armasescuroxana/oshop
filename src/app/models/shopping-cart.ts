import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};
        // tslint:disable-next-line:forin
        for (const productIs in itemsMap) {
            const item = itemsMap[productIs];

            this.items.push(new ShoppingCartItem({
                ...item,
                $key: productIs
            }));
        }
    }

    get totalItemsCount() {
        let shoppingCartItemCount = 0;
        // tslint:disable-next-line:forin
        for (const productId in this.itemsMap) {
            shoppingCartItemCount += this.itemsMap[productId].quantity;
        }
        return shoppingCartItemCount;
    }

    get totalItemsPrice() {
        let totalItemsPrice = 0;
        // tslint:disable-next-line:forin
        for (const productId in this.items) {
            totalItemsPrice += this.items[productId].totalPrice;
        }
        return totalItemsPrice;
    }

    getQuantity(product: Product) {
        const item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }
}

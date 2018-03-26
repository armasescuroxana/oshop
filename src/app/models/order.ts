import { ShoppingCart } from './shopping-cart';
export class Order {
    datePlaced;
    items: any[];

    constructor(private userId: string, private shipping: any, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();
        this.userId = userId;


        this.items = shoppingCart.items.map(i => {
            return {
                product: {
                    title: i.title,
                    price: i.price
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });

    }

}

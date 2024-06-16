import CartProductContract from "./CartProductContract";

export default interface CartContract {
    cartId: number;
    userId: number;
    cartProducts: CartProductContract[];
}